import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import { Container, Content, Button } from 'native-base';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapRegion: { latitude: 29.424349, longitude: -98.491142, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
            locationResult: null,
            location: {coords: { latitude: 29.424349, longitude: -98.491142}},
        }
    }

    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location), location, });
    };

    render() {

        return (
            <Container>
                <Content style={{flex: 1}}>
                    <MapView
                        style={{width: width, height: height}}
                        region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.008, longitudeDelta: 0.008 }}
                    >
                        <MapView.Marker coordinate={this.state.location.coords} title={"Current Location"} />
                    </MapView>
                    <View style={[styles.mapButtons]}>
                        <Button style={[styles.mapLeftButton]}>
                            <Text style={{fontWeight: 'bold'}}>ESCORT</Text>
                        </Button>
                        <Button style={[styles.mapRightButton]}>
                            <Text style={{fontWeight: 'bold', color: '#fff'}}>REPORT</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mapButtons: {
        position: 'absolute',
        flexDirection: 'row',
        top: '70%',
        left: 21,
        justifyContent: 'center',
    },
    mapLeftButton: {
        width: 150,
        marginRight: 50,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    mapRightButton: {
        width: 150,
        justifyContent: 'center',
        backgroundColor: '#ff0000'
    }
});