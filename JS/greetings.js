const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'
// string만 저장된 변수는 대문자로 표기, 별로 중요하지 않은 것도 이렇게 표기

function onLoginSubmit(event) {
  event.preventDefault(); 
  // 브라우저의 기본 동작을 막아줌. 여기서 기본동작은 입력 후 새로고침되는 거
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${username}!`;
  // greeting.innerText = 'Hi, '+ username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

} else {
  // show the greetings
  paintGreetings(savedUserName);
}
