let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";

    let editIndex = add.getAttribute("data-edit-index");
    if (editIndex !== null) {
      acceptEditedData(editIndex);
    } else {
      acceptData();
    }

    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
  }
};


let data = [{}];

let onCancelEdit = () => {
  add.removeAttribute("data-edit-index");
  add.setAttribute("data-bs-dismiss", "modal");

  let closeButton = document.querySelector("#form .btn-close");
  closeButton.removeEventListener("click", onCancelEdit);
};


let acceptEditedData = (index) => {
  data[index] = {
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  };

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let deleteAllTasks = () => {
  data = [];
  localStorage.removeItem("data");
  createTasks();
};


let deleteAllBtn = document.getElementById("deleteAll");
deleteAllBtn.addEventListener("click", deleteAllTasks);

let acceptData = () => {
  const selectedIndex = add.getAttribute("data-edit-index");
  if (selectedIndex !== null) {
    data[selectedIndex] = {
      text: textInput.value,
      date: dateInput.value,
      description: textarea.value,
    };
    add.removeAttribute("data-edit-index");
  } else {
    
    data.push({
      text: textInput.value,
      date: dateInput.value,
      description: textarea.value,
    });

  
    resetForm();
  }

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};



let createTasks = () => {
  tasks.innerHTML = "";
  data.forEach((x, y) => {
    tasks.innerHTML += `
      <div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>
  
        <span class="options">
          <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" data-index="${y}" class="fas fa-edit"></i>
          <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
        </span>
      </div>
    `;
  });

  resetForm();

  let addNewLink = document.getElementById("addNew");
  addNewLink.addEventListener("click", clearForm);
};


let clearForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";

  add.removeAttribute("data-edit-index");
  add.setAttribute("data-bs-dismiss", "modal");
};


let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  
};

let editTask = (e) => {
  let selectedIndex = e.getAttribute("data-index");
  let selectedTask = data[selectedIndex];

  textInput.value = selectedTask.text;
  dateInput.value = selectedTask.date;
  textarea.value = selectedTask.description;

  add.setAttribute("data-edit-index", selectedIndex);
  add.removeAttribute("data-bs-dismiss");

  let closeButton = document.querySelector("#form .btn-close");
  closeButton.addEventListener("click", onCancelEdit);
};


let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createTasks();
})();