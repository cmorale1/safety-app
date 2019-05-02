import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {StyleSheet, Text} from 'react-native';

export default class TopNavigation extends React.Component {
    render() {
        return (
            <Header noShadow style={[styles.header]}>
                <Left style={{flex: 1}}>
                    <Button transparent onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}>
                        <Icon style={{color: "white"}} name='menu' />
                    </Button>
                </Left>
                <Body style={{flex: 1, alignItems: 'center'}}>
                    <Text style={[styles.headerText]}>Safety</Text>
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
        backgroundColor: '#ff6700'
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        flex: 1
    }
});