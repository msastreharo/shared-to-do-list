const tasksToDo = document.querySelector(".to-do-list");

function loadTasks() {
    fetch("/tasks").then(res => res.json()).then(function (tasks) {
        tasks.forEach(task => {
            const element = `<div class="task">${task.description}</div>`;
            tasksToDo.insertAdjacentHTML("beforeend", element);
        })
    })
}

document.addEventListener("DOMContentLoaded", loadTasks);

