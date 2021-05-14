const tasksToDo = document.querySelector(".to-do-list");

function deleteToDo() {
    console.log("todo tocado") ;
    // Check fetch to delete: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}

function loadTasks() {
    fetch("/tasks").then(res => res.json()).then(function (tasks) {
        tasks.forEach((task, i) => {
            const element = `<div class="task" id="task-${i}"> ${task.description} </div>`;
            tasksToDo.insertAdjacentHTML("beforeend", element);
            document.getElementById(`task-${i}`).addEventListener("click", deleteToDo)
        })
    })
}



document.addEventListener("DOMContentLoaded", loadTasks);

