const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
const deleteAllBtn = document.querySelector('#delete-all');

const ITEM_KEY = "TodoItem";
const HIDDEN = 'hidden';

let todoItemArray = [];

todoForm.addEventListener("submit", handleToDoSubmit);

function saveTodoItem() {
  localStorage.setItem(ITEM_KEY, JSON.stringify(todoItemArray));
  //JSON.stringify(a) = a를 string으로 변환한다.
}

function deleteAll() {
  const removeStorage = localStorage.removeItem(ITEM_KEY);
  todoItemArray = removeStorage;
  todoList.classList.add(HIDDEN)
}

function handleDeleteItem() {
  const deleted = this.parentElement;
  deleted.remove();
  todoItemArray = todoItemArray.filter((toDo) => toDo.id !== parseInt(deleted.id));
  //todoItemArray 배열에 어떤 조건에 해당하는 애들만 포함한 배열을 할당한다.(즉, true인 애들만 남긴다.) 여기서 '어떤 조건'은 '지워진 애들과 id과 같지 않음'을 의미
  //Int로 파싱하는 이유는 deleted.id는 saveTodoItem에서 확인할 수 있듯 String으로 저장됐기 떄문에 Int인 배열 속 id와 형태를 맞춰야 한다.
  saveTodoItem();         
}
// 아래로 바꿔도 똑같이 작동한다.
// function handleDeleteItem(event) {
//   const deleted = event.target.parentElement;
//   deleted.remove();
// }

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoItemObj = {
    text: todoInput.value,
    id: Math.random() * 10e20,
  };
  todoItemArray.push(todoItemObj);
  paintTodoItem(todoItemObj);
  saveTodoItem();
  todoInput.value = "";
}

function paintTodoItem(item) {
  const wholeList = document.createElement('li');
  wholeList.id = item.id;
  const itemDesc = document.createElement('span');
  itemDesc.innerText = item.text;
  const itemDeleteButton = document.createElement('button');
  itemDeleteButton.innerText = '𝙓';
  itemDeleteButton.addEventListener('click', handleDeleteItem);
  wholeList.appendChild(itemDesc);
  wholeList.appendChild(itemDeleteButton);
  todoList.appendChild(wholeList);
}

deleteAllBtn.addEventListener('click', deleteAll);

const savedTodoItem = localStorage.getItem(ITEM_KEY);

if (savedTodoItem) {
  const parsedItems = JSON.parse(savedTodoItem);
  //JSON.parse(a) = a를 array로 변환한다.
  todoItemArray = parsedItems;
  //바꾼 애들을 array에 넣어줘야 함(할당함).
  todoItemArray.forEach(paintTodoItem);
  //할당된 애들은 객체의 형태를 띄고 있음.
  //array에 paintToDo 함수를 각각 씌워준다.
}