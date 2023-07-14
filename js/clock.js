
const clock = document.querySelector("js-clock")

const clockTitle = clock.clockContainer.querySelector("h1")

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = (minutes < 10) ? `0${minutes}` : minutes

    let seconds = date.getSeconds();
    seconds = (seconds < 10) ? `0${seconds}` : seconds
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}


/*
3항 연산
let a = (조건) ? "true" : "false";
조건을 만족하면 true를 만족false로 변경한다.*/

getTime();

// 실시간을 업로드 하기 위해 setInterval을 사용
setInterval(getTime, 10000)
clockTitle.addEventListener("click")