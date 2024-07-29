document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("lists");
    const addTaskButton = document.getElementById("add-task-button");

    function addTask() {
        if (inputBox.value === '') {
            alert("Enter a Task!!!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    // Event listener for adding a task
    addTaskButton.addEventListener('click', addTask);

    // Event listener for handling clicks on list items
    listContainer.addEventListener('click', function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    // Show saved tasks on page load
    showTask();
});
