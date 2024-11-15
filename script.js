const taskList = document.getElementById('task-list');

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const listItem = document.createElement('li');

        listItem.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-secondary', 'ms-2');
        deleteBtn.textContent = 'X';
        
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        listItem.classList.add('task-item');
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});

document.getElementById('clear-all-btn').addEventListener('click', function() {
    taskList.innerHTML = '';
});