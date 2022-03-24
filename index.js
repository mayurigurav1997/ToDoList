const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));  //JSON.parse() convert string data to JSON object
// The getItem() method returns value of the specified Storage Object item.
// The getItem() method belongs to the Storage Object

if (list) {
  list.forEach((task) => {
    toDoList(task);
    // console.log(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();  //prevent the page from refresh after click enter in input box after typing some text
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");     //Adding class  checked to the li
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-square-check">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");  //checked is a class name 
    //using toggle when click add the class, if click again remove that class
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();      //remove the element
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    // creating array of objects
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),  //it will store the value in true or false
    });
  });
  localStorage.setItem("list", JSON.stringify(list));   //convert JSON object into string data
  //The setItem() method belongs to the Storage Object
}
