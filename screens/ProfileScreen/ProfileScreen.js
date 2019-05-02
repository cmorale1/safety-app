import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import TopNavigation from "../../navigation/TopNavigation/TopNavigation";
import {Container} from "native-base";

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <Container style={{paddingTop: 24}}>
                <TopNavigation navigation={this.props.navigation}/>
                <Text onPress={() => this.props.navigation.navigate('Home')}>Profile Screen</Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});