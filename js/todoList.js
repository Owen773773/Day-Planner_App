class TodoList {
    constructor() {
        this.todo_list = [];
    }

    isEmpty() {
        return this.todo_list.length == 0? false : true;
    }

    push(todo) {
        todoList.push(todo);
        todoList.sort((a, b) => a.start-b.start);
    }
}