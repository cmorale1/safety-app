import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import { Container, Content, Button } from 'native-base';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        }
    }

    componentWillMount() {
        return getCurrentLocation().then(position => {
            if (position) {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003,
                    },
                });
            }
        });
    }

    render() {

        return (
            <Container>
                <Content style={{flex: 1}}>
                    <MapView
                        style={{width: width, height: height}}
                        initialRegion={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
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