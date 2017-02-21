import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import { SessionList } from "./components/sessionList";
export class MyFirstReactNative extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(SessionList, null)));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    }
});
AppRegistry.registerComponent("myfirstreactnative", () => MyFirstReactNative);
