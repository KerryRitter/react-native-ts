import React from "react";
import { ListView } from "react-native";
import { SessionListRow } from "./index";
import { DataService } from "../services/dataService";
export class SessionList extends React.Component {
    constructor() {
        super();
        this._dataService = new DataService();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            sessions: ds.cloneWithRows([])
        };
    }
    render() {
        return (React.createElement(ListView, { dataSource: this.state.sessions, renderRow: (session) => this.renderRow(session), enableEmptySections: true }));
    }
    componentDidMount() {
        this._dataService.getData().then(sessions => {
            this.setState({
                sessions: this.state.sessions.cloneWithRows(sessions)
            });
        });
    }
    renderRow(session) {
        return (React.createElement(SessionListRow, { session: session, sessionSelected: (session) => this.props.sessionSelected(session) }));
    }
}
