document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = taskText;

    const time = document.createElement("small");
    time.innerText = "Added: " + new Date().toLocaleString();

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.onclick = function () {
        completeTask(li);
    };

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        editTask(span);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("pendingList").appendChild(li);
    input.value = "";
}

function completeTask(li) {
    li.querySelector("button").remove(); // remove Complete button

    const completedTime = document.createElement("small");
    completedTime.innerText = "Completed: " + new Date().toLocaleString();
    li.appendChild(completedTime);

    document.getElementById("completedList").appendChild(li);
}

function editTask(span) {
    const newText = prompt("Edit task", span.innerText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}
