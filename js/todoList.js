class TodoList extends EventTarget{
    constructor() {
        super();
        this.todo_list = [];
    }

    isEmpty() {
        return this.todo_list.length == 0? false : true;
    }

    push(todo) {
        this.todo_list.push(todo);
        this.todo_list.sort((a, b) => {
            return new Date(`1970-01-01T${a.start}`) - new Date(`1970-01-01T${b.start}`);
        });

        //kirim event
        this._dispatchStateChange();
    }

    _dispatchStateChange() {
        if (this.isEmpty()) this.dispatchEvent(new Event("empty"));
        else this.dispatchEvent(new Event("filled"));
    }

    length() {
        return this.todo_list.length;
    }
}