function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector("button").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
