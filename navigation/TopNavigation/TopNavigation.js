import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {StyleSheet} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, ProfileScreen } from '../../screens/index.js';

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}, {
    initialRouteName: 'Home'
});

const App = createAppContainer(MainNavigator);

export class TopNavigation extends React.Component {
    render() {
        return (
            <Header style={[styles.header]}>
                <Left style={{flex: 1}}>
                    <Button transparent>
                        <Icon style={{color: "white"}} name='menu' />
                    </Button>
                </Left>
                <Body style={{flex: 1}}>
                    <Title style={[styles.headerText]}>SAFETY APP</Title>
                </Body>
                <Right>
                    <Icon style={{color: "white"}} name='cog' />
                </Right>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red'
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold'
    }
});