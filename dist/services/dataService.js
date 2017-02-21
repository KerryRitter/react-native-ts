import { Session } from "../models/index";
export class DataService {
    getData() {
        return fetch("http://kerryritter.com/mwdconf.json", {})
            .then(response => response.json())
            .then(response => response.map((r) => new Session(r)));
    }
}
