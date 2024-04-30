import { addNewTask, restoreTasks, saveTasks, deleteSelectedTasks, darkMode} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    restoreTasks();
    darkMode();
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {
    addNewTask();
    saveTasks();
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function() {
    deleteSelectedTasks();
    saveTasks();
    restoreTasks();
}
);





