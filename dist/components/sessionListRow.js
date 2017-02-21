import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
export class SessionListRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: this.props.session
        };
    }
    render() {
        return (React.createElement(TouchableHighlight, { style: styles.container, onPress: () => this.onRowPress() },
            React.createElement(View, null,
                React.createElement(Text, null, this.state.session.fullTitle))));
    }
    onRowPress() {
        this.props.sessionSelected(this.props.session);
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#EEE",
        padding: 5
    }
});
