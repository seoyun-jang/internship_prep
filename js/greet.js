const form = document.querySelector(".js-form");
//js.-form은 class이기 때문에 .을 붙인다.

const input = form.querySelector("input")

const greeting = document.querySelector(".js-greetings")

function showGreeting(name){
    // form에 있는 class를 제거해서 안보이게 하고
    // greeting 요소를 보이게 하기!
    greeting.innerText(`안녕하세요 ${name}`)
}

function saveName(name){
    localStorage.setItem("currentUser", name)
}

function handleSubmit(event){
    event.preventDefault();
    const value = input.value;
    //console.log(value)

    // 인삿말 띄우기
    showGreeting(value);

    // 스토리지에 이름을 저장
    saveName(value);
}

function askForName(){
    // submit : enter(제출)
    form.addEventListener("submit", handleSubmit);
}

// 이름을 불러오는 함수
function loadName(){
    // 스토리지에 저장된 정보를 가져옴
    const currentUser = localStorage.getItem("currentUser")
    if (currentUser == null){
        askForName();

    } else {
        showGreeting(currentUser)
    }
}


function init(){
    // 이름 불러오기
    loadName();
}

init();