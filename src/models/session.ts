export class Session {
    private date: string;

    public id: number;
    public speaker: string;
    public title: string;
    public details: string;

    public get fullTitle() {
        if (this.speaker) {
            return `'${this.title}' by ${this.speaker}`;
        }
        return `'${this.title}'`;
    }

    public get dateTime() {
        return new Date(this.date);
    }
    public set dateTime(value: Date) {
        this.date = value.toString();
    }

    public constructor(obj: any) {
        this.date = obj["date"];
        this.id = obj["id"];
        this.speaker = obj["speaker"];
        this.title = obj["title"];
        this.details = obj["details"];
    }
}