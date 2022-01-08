const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const deleteAllBtn = document.querySelector('#delete-all');

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify(a) = a를 string으로 변환한다.
}

function deleteAll() {
  localStorage.removeItem(TODOS_KEY);
  toDoList.remove();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
// 아래로 바꿔도 똑같이 작동한다.
// function deleteTodo() {
//   const li = this.parentElement;
//   li.remove();
// }

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  // append는 맨 마지막에 있어야 함
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
deleteAllBtn.addEventListener('click', deleteAll);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  //JSON.parse(a) = a를 array로 변환한다.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} 