// Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    if(name.trim() === ""){
        document.getElementById("nameError").innerHTML =
        "Name is required";
        valid = false;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML =
        "Enter valid email";
        valid = false;
    }

    if(valid){
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }

});


// Dynamic To-Do List

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let task = taskInput.value;

    if(task.trim() === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">
        Delete
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}