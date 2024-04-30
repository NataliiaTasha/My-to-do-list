export function addNewTask () {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value;

    //creates a new list and a checkbox
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    li.appendChild(checkbox);

    //adds task value to the list item
    const node = document.createTextNode(taskValue);
    li.appendChild(node);

    //adds list item to the task list
    const list = document.getElementById("task-list");
    list.appendChild(li);
  
    //clear input
    taskInput.value = "";

}

export function saveTasks() {
    const tasks = document.getElementById("task-list").innerHTML;
    localStorage.setItem("tasks", tasks);
}

export function restoreTasks() {
    const tasks = localStorage.getItem("tasks");
    if(tasks) {
        document.getElementById("task-list").innerHTML = tasks;
    }
}

export function deleteSelectedTasks() {
    const taskItems = document.querySelectorAll("li");
    taskItems.forEach(function(taskItem) {
        const checkbox = taskItem.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
           taskItem.remove();
        }
    });
    // restoreTasks;
}

export function darkMode() {
    const icon = document.getElementById("dark-mode");
    const body = document.querySelector("body");
    const input = document.querySelector("input");
    const buttonAdd = document.querySelector(".add");
    const buttonDel = document.querySelector(".delete");
    // const check = document.querySelector(".check");

    icon.addEventListener("click", (event) => {
        if(body.classList.contains("dark")) {
            body.classList.remove("dark");
            input.style.color = "black";
            input.style.backgroundColor = "white";
            input.style.borderColor = "gray";
            buttonAdd.style.color = "white";
            buttonDel.style.color = "white";

            // icon.src = "assets/images/Mode-green.svg";
         } else {
            body.classList.add("dark");
            // icon.src = "assets/images/Mode-dark.svg";
            input.style.backgroundColor = "black";
            input.style.borderColor = "#5cab7d";
            input.style.color = "white";
            buttonAdd.style.color = "black";
            buttonDel.style.color = "black";
            // check.style.backgroundColor = "black";

         }
    })
 }






    

