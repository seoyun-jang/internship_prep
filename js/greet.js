//js.-form은 class이기 때문에 .을 붙인다.

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

// 인삿말 띄우기
function showGreeting(name) {
    // form에 있는 class를 제거해서 안 보이게 하고
    // greeting 요소를 보이게 하기
    greeting.innerText = `안녕하세요 ${name}`;
    //const textBox = document.querySelector("input")
    //form.classList.remove()

    console.log(`안녕하세요 ${name}`);
}

// 입력받은 이름을 저장
function saveName(name){
    localStorage.setItem("currentUser", name)
}

// check

function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    console.log(value);
    showGreeting(value);
    saveName(value);

}

function askForName(){
    // submit : enter(제출)

    form.addEventListener("submit", handleSubmit);
}

// 이름을 불러오는 함수
function loadName(){
    // 스토리지에 저장된 정보를 가져옴
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser == null){
        askForName(); 

    } else {
        localStorage.removeItem("currentUser")
        showGreeting(currentUser);

    }

}


function init(){
    // 이름 불러오기
    loadName();
}

init();