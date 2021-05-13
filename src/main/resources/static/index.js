const tasksToDo = document.querySelector(".to-do-list");

function loadTasks() {
    fetch("/tasks").then(res => res.json()).then(function (tasks) {
        tasks.forEach((task, i) => {
            const element = `<div class="task" id="task-${i}">${task.description}</div>`;
            tasksToDo.insertAdjacentHTML("beforeend", element);
            document.getElementById("task-${i}").addEventListener("click", deleteToDo())
        })
    })
}

document.addEventListener("DOMContentLoaded", loadTasks);

