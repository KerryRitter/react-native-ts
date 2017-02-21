import React from "react";
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight, Alert } from "react-native";
import { SessionListRow } from "./index";
import { Session } from "../models/index";
import { DataService } from "../services/dataService";

interface SessionListState {
    sessions: React.ListViewDataSource;
}

interface SessionListProps {
    sessionSelected: (session: Session) => void;
}

export class SessionList extends React.Component<SessionListProps, SessionListState> {
    private readonly _dataService: DataService = new DataService();

    public constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            sessions: ds.cloneWithRows([])
        };
    }

    public render() {
        return (
            <ListView
                dataSource={this.state.sessions}
                renderRow={(session: Session) => this.renderRow(session)}
                enableEmptySections={true} 
            />
        );
    }

    public componentDidMount() {
        this._dataService.getData().then(sessions => {
            this.setState({ 
                sessions: this.state.sessions.cloneWithRows(sessions)
             });
        });
    }

    private renderRow(session: Session) {
        return (
            <SessionListRow session={session} sessionSelected={(session: Session) => this.props.sessionSelected(session)} />
        );
    }
}