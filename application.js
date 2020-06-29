// Creating variables for HTML Elements
let myTasks = document.querySelector('ul');
let myAddButton = document.querySelector('button');
let data = document.querySelector('input');

// Added Event Handler on Add Button
myAddButton.onclick = listAppend;

function listAppend() {
    // A Checkbox For completion of tasks
    let tCheckBox = document.createElement('input');
    tCheckBox.type = 'checkbox';
    tCheckBox.classList = 'checkBoxClass';
    tCheckBox.onclick = CompleteTask;

    // Element to show Task Name
    let tName = document.createElement('h4');
    tName.textContent = data.value;

    // Remove Button for Completed Tasks
    let tDelete = document.createElement('Button');
    tDelete.textContent = 'Remove';
    tDelete.onclick = RemoveTask;
    // List element for unordered list
    let taskLi = document.createElement('li');
    taskLi.classList = 'incomplete';
    taskLi.appendChild(tCheckBox);
    taskLi.appendChild(tName);
    taskLi.appendChild(tDelete);

    // prepend to append on top
    myTasks.prepend(taskLi);
}

function CompleteTask(e) {
    // changing class of list elemnt to update it's decoration
    e.target.parentNode.classList = 'complete';
    // rearangement of task
    e.target.parentNode.parentNode.appendChild(e.target.parentNode);
}

function RemoveTask(e) {
    // removing task from parent node
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}
