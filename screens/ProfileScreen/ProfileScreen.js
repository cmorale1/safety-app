import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { TopNavigation, BottomNavigation } from "../../navigation/index.js";
import {Container, Content, Form, Item, Input, Button} from "native-base";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

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
                <Content style={{flex: 1, width: width, height: height}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={[styles.profile]}>Profile</Text>
                    </View>
                    <Form>
                        <Item>
                            <Input placeholder={"First Name"}/>
                        </Item>
                        <Item>
                            <Input placeholder={"Last Name"}/>
                        </Item>
                        <Item>
                            <Input keyboardType={'email-address'} placeholder={"Email"}/>
                        </Item>
                        <Item>
                            <Input keyboardType={'number-pad'} placeholder={"Phone Number"}/>
                        </Item>
                        <View style={{marginTop: 30, marginBottom: 30, alignContent: 'center'}}>
                            <Button style={[styles.updateButton]}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Update</Text>
                            </Button>
                            <Button style={[styles.editContactsButton]}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Edit Emergency Contacts</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
                <BottomNavigation navigation={this.props.navigation}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    profile: {
        fontWeight: 'bold',
        fontSize: 24
    },
    updateButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    editContactsButton: {
        backgroundColor: 'orange',
        borderRadius: 2,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    }
});