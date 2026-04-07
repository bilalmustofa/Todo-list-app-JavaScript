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
        // create span tag in to 'taskListDiv' for task Name
        const taskNameSpan = document.createElement('span');
        taskNameSpan.id = "taskName"
        taskNameSpan.textContent = taskInputValue;
        // create delete button tag in 'taskListDiv' 
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete";
        deleteBtn.textContent = "❌";

        // append elements
        taskListDiv.appendChild(taskNameSpan);
        taskList.appendChild(taskListDiv);
        taskListDiv.appendChild(deleteBtn);

        taskInput.value = "";
    }
});

// Delete The Task
taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});
