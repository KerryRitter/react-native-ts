import { Session } from "../models/index";

declare var fetch: (url: string, headers: {}) => Promise<any>;

export class DataService {
    public getData(): Promise<Session[]> {
        return fetch("http://kerryritter.com/mwdconf.json", {})
            .then(response => response.json())
            .then(response => response.map((r: any) => new Session(r)));
    }
}