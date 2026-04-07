// To Add task  
const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#newTask input');
addBtn.addEventListener('click', () => {
    // input Validation
    const taskInputValue = taskInput.value;
    if(taskInputValue.length === 0) {
        alert("Please First Enter a tasks!")
    } else {
        // create container Div in task list container
        const taskListDiv = document.createElement('div');
        const taskList = document.querySelector('#taskList');
        taskListDiv.className = "single-task";
        taskList.appendChild(taskListDiv);
        // create span tag in to 'taskListDiv' for task Name
        const taskNameSpan = document.createElement('span');
        taskNameSpan.id = "taskName"
        taskNameSpan.textContent = taskInputValue;
        taskListDiv.appendChild(taskNameSpan);
        // create delete button tag in 'taskListDiv' 
        const deleteBtn = document.createElement('button');
        taskNameSpan.className = "delete";
        deleteBtn.textContent = "❌";
        taskListDiv.appendChild(deleteBtn);
    }
});