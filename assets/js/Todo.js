class Todo {
    constructor(id, title, desc, start, end) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.start = start;
        this.end = end;
        this.notes = "";
    }

    toString() {
        return this.title + " " + this.desc + " " + this.start + " " + this.end;
    }
}