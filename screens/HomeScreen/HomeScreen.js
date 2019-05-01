import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { Container, Content, Button } from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content style={{flex: 1, backgroundColor: 'powderblue'}}>

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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