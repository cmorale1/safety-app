import React from "react";
import {FooterTab, Button} from 'native-base';
import {StyleSheet, Text} from "react-native";

export default class BottomNavigation extends React.Component {
    render() {
        return (
            <FooterTab style={[styles.footer]}>
                <Button vertical bordered full active>
                    <Text style={[styles.footerText]}>Map</Text>
                </Button>
                <Button vertical bordered full>
                    <Text style={[styles.footerText]}>Contact 911</Text>
                </Button>
                <Button vertical bordered full>
                    <Text style={[styles.footerText]}>Alerts</Text>
                </Button>
                <Button vertical bordered full>
                    <Text style={[styles.footerText]}>Contacts</Text>
                </Button>
            </FooterTab>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    footerText: {
        color: '#ff6700',
        fontWeight: 'bold'
    }
});