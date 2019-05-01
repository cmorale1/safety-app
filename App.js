import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';
import { Container, Content, Footer } from 'native-base';
import { HomeScreen } from './screens/index.js';
import { TopNavigation, BottomNavigation } from './navigation/index.js';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Container style={{paddingTop: 24}}>
                    <TopNavigation navigation={this.props.navigation}/>
                    <Content>
                        <HomeScreen/>
                    </Content>
                    <Footer>
                        <BottomNavigation/>
                    </Footer>
                </Container>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([

            ]),
            Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
            })
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red'
    }
});