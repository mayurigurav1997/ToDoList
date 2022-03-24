const formE1 = document.querySelector('.form');
const inputE1 = document.querySelector('.input');
const ulE1 = document.querySelector('.list');

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}


formE1.addEventListener('submit', (eve) => {
    eve.preventDefault();   //prevent the page from refresh after click enter  in input box
    toDoList();
    console.log(inputE1.value);

});

function toDoList(){
    let newTask = inputE1.value;
    if (task) {
        newTask = task.name;
      }
    const liE1 = document.createElement("li");
    if (task && task.checked) {
        liEl.classList.add("checked");
      }
    liE1.innerText = newTask;
    ulE1.appendChild(liE1);
    inputE1.value = "";
    const checkBtnE1 = document.createElement("div");
    checkBtnE1.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div");
    trashBtnE1.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liE1.appendChild(trashBtnE1);

    checkBtnE1.addEventListener("click", () => {
        liE1.classList.toggle("checked");  //checked is a class name 
        //using toggle when click add the class, if click again remove that class
        updateLocalStorage();
    })

    trashBtnE1.addEventListener("click",() => {
        liE1.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
}

function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach((liEl) => {
      list.push({
        name: liEl.innerText,
        checked: liEl.classList.contains("checked"),
      });
    });
    localStorage.setItem("list", JSON.stringify(list));
}