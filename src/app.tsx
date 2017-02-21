import React from "react";
import { AppRegistry, StyleSheet, Text, View, Navigator, Alert, BackAndroid } from "react-native";
import { Home, SessionView } from "./pages/index";

export class App extends React.Component<any, any> {
    public render() {
        return (
            <Navigator
            initialRoute={{id: "Home", name: "Index"}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }} />
        );
    }

    public renderScene(route: { id: string, data: any }, navigator: Navigator) {
        var routeId = route.id;
        
        if (routeId === "Home") {
            return (
                <Home navigator={navigator} />
            );
        }
        
        if (routeId === "SessionView") {
            return (
                <SessionView session={route.data} navigator={navigator}  />
            );
        }

        return (
            <Home navigator={navigator} />
        );
    }
}