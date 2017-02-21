import React from "react";
import { StyleSheet, Text, View } from "react-native";
export class SessionView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, { style: styles.header }, this.props.session.title),
            React.createElement(Text, { style: styles.speaker }, this.props.session.speaker),
            React.createElement(Text, { style: styles.details }, this.props.session.details)));
    }
    sessionSelected(session) {
        this.props.navigator.replace({
            id: "SessionView"
        });
    }
}
const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F4364",
        color: "#FFFFFF",
        fontSize: 20,
        padding: 5,
        textAlign: "center"
    },
    speaker: {
        backgroundColor: "#175F8D",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        padding: 5
    },
    details: {
        padding: 5
    }
});
