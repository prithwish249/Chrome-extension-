let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.dataset.index = index;
    li.addEventListener("click", () => deleteTask(index)); // This line may cause the error if deleteTask function is not defined.
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", renderTasks);

