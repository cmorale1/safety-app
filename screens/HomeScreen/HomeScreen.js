import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content style={{flex: 1, backgroundColor: 'powderblue'}}/>
            </Container>
        )
    }
}