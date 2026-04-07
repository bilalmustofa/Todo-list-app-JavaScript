// To Add task  
const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#newTask input');
addBtn.addEventListener('click', () => {
    // input Validation
    const taskInputValue = taskInput.value;
    if(taskInputValue.length === 0) {
        alert("Please First Enter a tasks!")
    }
});