import React from "react";
import { AppRegistry, StyleSheet, Text, View, Alert } from "react-native";
import { Session } from "../models/index";
import { SessionList } from "../components/index";
import { PageProps } from "../models/index";
import { DataService } from "../services/dataService";

interface SessionViewState {
    sessions: Session[];
}

interface SessionViewProps extends PageProps {
    session: Session;
}

export class SessionView extends React.Component<SessionViewProps, SessionViewState> {
    public constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <View>
                <Text style={styles.header}>{this.props.session.title}</Text>
                <Text style={styles.speaker}>{this.props.session.speaker}</Text>
                <Text style={styles.details}>{this.props.session.details}</Text>
            </View>
        );
    }

    public sessionSelected(session: Session) {
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
    } as React.ViewStyle,
    speaker: {
        backgroundColor: "#175F8D",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        padding: 5
    } as React.ViewStyle,
    details: {
        padding: 5
    } as React.ViewStyle
});