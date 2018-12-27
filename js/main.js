const list = document.querySelector(".book-titles");
const form = document.querySelector("#form");

//listening for a click event on ul, if ul contains a class of delete it will delete that li element

list.addEventListener("click", e => {
  if (e.target.className == "delete") {
    console.log("deleted");
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const input = document.querySelector(".text-field").value;

  //create elements
  const liElement = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.classList.add("delete");
  if (input == "") {
    return;
  } else {
    //append items
    liElement.appendChild(span);
    liElement.appendChild(button);
    span.textContent = input;
    button.textContent = "Delete";
    list.appendChild(liElement);
  }
  reset();
});

function reset() {
  document.querySelector(".text-field").value = "";
}
