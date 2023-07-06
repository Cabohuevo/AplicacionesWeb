let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "<span style='color: red;'>El comentario no puede estar vacio</span>";

  } else if (input.value.length > 255) {
    msg.innerHTML = "<span style='color: red;'>El comentario debe de contener menos de 255 caracteres</span>";
    
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  data["date"] = new Date().toLocaleString();
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <p class="date">${data.date}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <a onClick="deletePost(this)" class="fas fa-trash-alt"></a>
      </span>
    </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};