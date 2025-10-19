function show_add(event) {
    const get_add_popup = document.querySelector("#add_pop-up");
    const get_background_popup = document.querySelector("#background");
    get_add_popup.style.display = "block";
    get_background_popup.style.display = "block";

    const get_exit_btn = document.querySelector("#exit_btn");
    get_exit_btn.addEventListener("click", () => remove_show_todo(event, get_add_popup, get_background_popup));
}

function remove_show_todo(event, get_add_popup, get_background_popup) {
    get_add_popup.style.display = "none";
    get_background_popup.style.display = "none";
}

function add_todo(event) {
    const get_input_title_value = document.querySelector("#input_title").value;
    let get_input_desc_value = document.querySelector("#input_desc").value;
    let get_input_start_time_value = document.querySelector("#input_start_time").value;
    let get_input_end_time_value = document.querySelector("#input_end_time").value;

    if (get_input_title_value.length === 0) alert("Please insert the title.");
    else {
        if (get_input_desc_value.length === 0) get_input_desc_value = "-";
        if (get_input_start_time_value.length === 0) get_input_start_time_value = "-";
        if (get_input_end_time_value.length === 0) get_input_end_time_value = "-";

        let todo = new Todo(
            get_input_title_value,
            get_input_desc_value,
            get_input_start_time_value,
            get_input_end_time_value
        );

        let todoList = new TodoList();
    }
}

(function () {
    const get_add_btn = document.querySelector("#add_btn");
    get_add_btn.addEventListener("click", show_add);
    
    const get_accept_btn = document.querySelector("#accept_btn");
    get_accept_btn.addEventListener("click", add_todo);
})();