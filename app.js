const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); 
    // 브라우저의 기본 동작을 막아줌
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit이라는 이벤트에 대해 onLoginSubmit이라는 함수를 실행함.
// onLoginSubmit이라는 함수에 event라는 인자를 넣고,
    // 인자를 아무것도 넣지 않으면, 메소드를 붙일 수 없다.  
// 이 인자에 preventDefault()라는 메소드를 넣어 브라우저의 기본 동작을 막는다.
    // '새로고침'이라는 기본 동작을 막지 않으면 유저의 정보가 저장된 직후 바로 보이지 않게 된다.
// 유저가 입력한 값을 알기 위해 console.log의 인자를 loginInput.value로 넣는다.