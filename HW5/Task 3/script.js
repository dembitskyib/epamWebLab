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
    checkBox.checked = false;
    let deleteButton = document.createElement("button");
    let spanButton = document.createElement("span");
    spanButton.className = "buttonSpan";
    deleteButton.className = "deleteButton";
    deleteButton.appendChild(document.createTextNode("Remove"));
    spanButton.appendChild(deleteButton);
    taskNode.appendChild(checkBox);
    taskNode.appendChild(spanTask);
    taskNode.appendChild(spanButton);
    taskNode.draggable = true;
    addEventsCheckAndDelete(taskNode);
    addEventsDragAndDrop(taskNode);
    return taskNode;
}

function deleteTask(button) {
    let taskToDelete = button.parentNode.parentNode;
    document.getElementById("taskList").removeChild(taskToDelete);
}

function checkTask(checkBox) {
    let listElement = checkBox.parentNode;
    let textSpan = listElement.getElementsByClassName("task")[0];
    if (textSpan.className == "task") {
        textSpan.className = "complited task";
    } else {
        textSpan.className = "task";
    }
}

function addEventsCheckAndDelete(listElement){
    console.log(listElement);
    listElement.getElementsByClassName("deleteButton")[0].addEventListener('click', function () {
        deleteTask(this);
    });
    listElement.getElementsByClassName("checkTask")[0].addEventListener('click', function () {
        checkTask(this);
    });
}


function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEnter(e) {
    this.classList.add('over');
}

function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function drop(e) {
    if (dragSrcEl != this) {
        let checkedFirst = this.getElementsByClassName("checkTask")[0].checked;
        let checkedSecond = dragSrcEl.getElementsByClassName("checkTask")[0].checked;
        dragSrcEl.innerHTML = this.innerHTML;
        dragSrcEl.getElementsByClassName("checkTask")[0].checked = checkedFirst;
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.getElementsByClassName("checkTask")[0].checked = checkedSecond;
        addEventsCheckAndDelete(this);
        addEventsCheckAndDelete(dragSrcEl);
    }
    return false;
}

function dragEnd(e) {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function (item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}


function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', drop, false);
    el.addEventListener('dragend', dragEnd, false);
}

