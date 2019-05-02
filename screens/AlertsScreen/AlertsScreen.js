import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { TopNavigation, BottomNavigation } from "../../navigation/index.js";
import {Container, Content, Accordion} from "native-base";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const dataArray = [
    { title: "Lorem Ipsum", content: "Crime reported near your area at 1039 West Mulberry." },
    { title: "Lorem Ipsum", content: "Use Escort on the Map screen to travel safely." },
    { title: "Lorem Ipsum", content: "Report a crime using the red report button on the Map screen." }
];

export default class AlertsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Alerts'
    };

    render() {
        return (
            <Container style={{paddingTop: 24}}>
                <TopNavigation navigation={this.props.navigation}/>
                <Content style={{flex: 1, width: width, height: height}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, padding: 20, marginBottom: 30}}>
                        <Text style={[styles.alertsHeader]}>Alerts</Text>
                    </View>
                    <Accordion dataArray={dataArray}/>
                </Content>
                <BottomNavigation navigation={this.props.navigation}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    alertsHeader: {
        fontWeight: 'bold',
        fontSize: 24
    },
});