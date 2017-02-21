import React from "react";
import { AppRegistry, StyleSheet, Text, View, Alert, BackAndroid } from "react-native";
import { Session } from "../models/index";
import { SessionList } from "../components/index";
import { PageProps } from "../models/index";

export class Home extends React.Component<PageProps, any> {
    public render() {
        return (
            <View style={styles.container}>
                <SessionList sessionSelected={(session: Session) => this.sessionSelected(session)} />
            </View>
        );
    }

    public sessionSelected(session: Session) {
        this.props.navigator.replace({
            id: "SessionView",
            data: session
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.ViewStyle,
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.ViewStyle
});