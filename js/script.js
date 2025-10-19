function add_todo(event) {
    const get_add_popup = document.querySelector("#add_pop-up");
    const get_background_popup = document.querySelector("#background");
    get_add_popup.style.display = "block";
    get_background_popup.style.display = "block";

    const get_exit_btn = document.querySelector("#exit_btn");
    get_exit_btn.addEventListener("click", () => remove_add_todo(event, get_add_popup, get_background_popup));
}

function remove_add_todo(event, get_add_popup, get_background_popup) {
    get_add_popup.style.display = "none";
    get_background_popup.style.display = "none";
}

(function () {
    const get_add_btn = document.querySelector("#add_btn");
    get_add_btn.addEventListener("click", add_todo);
})();