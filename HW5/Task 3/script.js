function addTask() {
    let taskList = document.getElementById("taskList");
    let newTask = document.getElementById("userTask").value;
    if (newTask !== "") {
        taskList.appendChild(createTask(newTask));
        document.getElementById("userTask").value = "";
    }
}

function createTask(value) {
    let taskNode = document.createElement("li");
    let spanTask = document.createElement("span");
    spanTask.className = "task";
    spanTask.appendChild(document.createTextNode(value));
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkTask";
    let deleteButton = document.createElement("button");
    let spanButton = document.createElement("span");
    spanButton.className = "buttonSpan";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener('click', function () {
        deleteTask(this);
    });
    deleteButton.appendChild(document.createTextNode("Remove"));
    spanButton.appendChild(deleteButton);
    taskNode.appendChild(checkBox);
    taskNode.appendChild(spanTask);
    taskNode.appendChild(spanButton);
    return taskNode;
}

function deleteTask(button) {
    let taskToDelete = button.parentNode.parentNode;
    document.getElementById("taskList").removeChild(taskToDelete);
}

function checkTask(checkBox){
    let listElement = checkBox.parentNode;
    let textSpan = listElement.getElementsByClassName("task")[0];
    if(textSpan.className == "task"){
        textSpan.className = "complited task";
    } else {
        textSpan.className = "task";
    }
}