export class Session {
    get fullTitle() {
        if (this.speaker) {
            return `'${this.title}' by ${this.speaker}`;
        }
        return `'${this.title}'`;
    }
    get dateTime() {
        return new Date(this.date);
    }
    set dateTime(value) {
        this.date = value.toString();
    }
    constructor(obj) {
        this.date = obj["date"];
        this.id = obj["id"];
        this.speaker = obj["speaker"];
        this.title = obj["title"];
        this.details = obj["details"];
    }
}
