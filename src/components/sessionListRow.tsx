import React from "react";
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight } from "react-native";
import { Session } from "../models/session";

interface SessionListRowState {
    session: Session;
}

interface SessionListRowProps {
    sessionSelected: (session: Session) => void;
    session: Session;
}

export class SessionListRow extends React.Component<SessionListRowProps, SessionListRowState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            session: this.props.session
        };
    }

    public render() {
        return (
            <TouchableHighlight style={styles.container} onPress={() => this.onRowPress()}>
                <View>
                    <Text>{this.state.session.fullTitle}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    private onRowPress() {
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