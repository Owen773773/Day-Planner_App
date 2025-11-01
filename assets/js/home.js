let todoList = new TodoList();

function show_add(event) {
    emptying_input();

    const get_add_popup = document.querySelector("#add_pop-up");
    const get_background_popup = document.querySelector("#background");
    get_add_popup.style.display = "block";
    get_background_popup.style.display = "block";

    const get_exit_btn = document.querySelector("#exit_btn");
    get_exit_btn.addEventListener("click", () => remove_show_todo(event, get_add_popup, get_background_popup));
}

function emptying_input() {
    const all_input_popup_container = document.querySelectorAll(
        "#add_pop-up_container input, #add_pop-up_container textarea"
    );

    for (const input of all_input_popup_container) {
        input.value = "";
    }
}

function remove_show_todo(event, get_add_popup, get_background_popup) {
    get_add_popup.style.display = "none";
    get_background_popup.style.display = "none";
}

function add_todo(event) {
    const get_id = "content" + (todoList.todo_list.length + 1);
    const get_input_title_value = document.querySelector("#input_title").value;
    let get_input_desc_value = document.querySelector("#input_desc").value;
    let get_input_start_time_value = document.querySelector("#input_start_time").value;
    let get_input_end_time_value = document.querySelector("#input_end_time").value;

    if (
        get_input_title_value.length === 0 ||
        get_input_start_time_value.length === 0 ||
        get_input_end_time_value.length === 0
    ) {alert("Please complete the procedure.");}
    else {
        if (get_input_desc_value.length === 0) get_input_desc_value = "-";

        let todo = new Todo(
            get_id,
            get_input_title_value,
            get_input_desc_value,
            get_input_start_time_value,
            get_input_end_time_value
        );

        todoList.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todoList));

        refresh_plan_to_screen();
        add_plan_to_css_grid();

        const get_add_popup = document.querySelector("#add_pop-up");
        const get_background_popup = document.querySelector("#background");
        get_add_popup.style.display = "none";
        get_background_popup.style.display = "none";
    }
}

function refresh_plan_to_screen() {
    const get_container = document.querySelector("#container");
    const get_content_row = document.querySelector("#content0");
    const todolist_localStorage = JSON.parse(localStorage.getItem("todoList"));

    todolist_localStorage.todoList.forEach((todo, index) => {
        const content_x = document.getElementById("content" + (index+1));
        if (content_x !== null) content_x.remove();

        const clone_content_row = get_content_row.cloneNode(true);
        
        //mulai dari 1 -> content1, content2, ...
        clone_content_row.id = "content" + (index+1);
        clone_content_row.grid_area = "content" + (index+1);
        clone_content_row.style.display = "grid";
    
        //copy todo to new plan
        const content = clone_content_row.children;
        content[0].textContent = todo.title;
        content[1].textContent = todo.desc;
        content[2].textContent = todo.start;
        content[3].textContent = todo.end;

        get_container.appendChild(clone_content_row);
    });
}

function add_plan_to_css_grid() {
    const get_container = document.querySelector("#container");
    let grid_template = get_container.style.gridTemplateAreas;
    grid_template += `\n"content${(todoList.length())}"`;
}

function show_empty_container(event) {
    const get_empty_container = document.querySelector("#empty_container");
    const get_table_title = document.querySelector("#container > .table_title");
    
    get_empty_container.style.display = "block";
    get_table_title.style.display = "none";
}

function close_empty_container(event) {
    const get_empty_container = document.querySelector("#empty_container");
    const get_table_title = document.querySelector("#container > .table_title");

    get_empty_container.style.display = "none";
    get_table_title.style.display = "grid";
}

function open_notes(event) {
    const get_clicked_content = event.target;
    const get_id_content = get_clicked_content.id;

    sessionStorage.setItem("todo_note", get_id_content);
    window.location.href = "notes.html";
}

(function () {
    const get_add_btn = document.querySelector("#add_btn");
    get_add_btn.addEventListener("click", show_add);
    
    const get_accept_btn = document.querySelector("#accept_btn");
    get_accept_btn.addEventListener("click", add_todo);

    todoList.addEventListener("empty", close_empty_container);
    todoList.addEventListener("filled", show_empty_container);

    const get_container = document.getElementById("container");
    get_container.addEventListener("click", open_notes);
})();