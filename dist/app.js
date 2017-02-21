import React from "react";
import { Navigator } from "react-native";
import { Home, SessionView } from "./pages/index";
export class App extends React.Component {
    render() {
        return (React.createElement(Navigator, { initialRoute: { id: "Home", name: "Index" }, renderScene: this.renderScene.bind(this), configureScene: (route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            } }));
    }
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === "Home") {
            return (React.createElement(Home, { navigator: navigator }));
        }
        if (routeId === "SessionView") {
            return (React.createElement(SessionView, { session: route.data, navigator: navigator }));
        }
        return (React.createElement(Home, { navigator: navigator }));
    }
}
