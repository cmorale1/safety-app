import React from "react";
import {FooterTab, Button, Text} from 'native-base';
import {StyleSheet} from "react-native";

export default class BottomNavigation extends React.Component {
    render() {
        return (
            <FooterTab style={[styles.footer]}>
                <Button vertical>
                    <Text style={[styles.footerText]}>Map</Text>
                </Button>
                <Button vertical>
                    <Text style={[styles.footerText]}>Report</Text>
                </Button>
            </FooterTab>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fff'
    },
    footerText: {
        color: '#ff0b00',
        fontSize: 16
    }
});