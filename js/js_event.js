// console.log(document);

//    <h1 id="title">hello</h1>
let title = document.getElementById('title');

console.log(title.style.color);

// id 속성 color 변경
title.style.color = "red";

let obj = {
    name: "kim",
    age: 34
}

console.log(obj.name);
obj.name = "David";
console.log(obj.name);

// title name 변경
document.title = "DOM Practice";


title = document.querySelector('#title');
console.log(title);

// title 색상 변경
title.style.color = "green";

title.innerHTML = "Hello Javascript";

function notifiResize(){
    // 출력 창 변경시 이벤트 출력
    console.log("Resize 되었습니다.")

    // 페이지 창 크기 출력
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(width, height)
}

window.addEventListener("resize", notifiResize);


const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "brown";

// title 클릭 시 색상변경하기
function handleClick(){
    //title.style.color = "yellow";
    let currentColor = title.style.color;
    if (currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

title.addEventListener("click", handleClick)

title.addEventListener("mouseenter", handleClick)


/* 컬러가 4개 이상 들어가 있는 배열을 만들고
 특정 이벤트를 통해 랜덤으로 컬러가 선택되게 만들기 */

let colorArr = ["red", "blue", "green", "orange"]

function randomColor(){
    let index = Math.floor(Math.random() * 4)
    title.style.color = colorArr[index]
}

title.addEventListener("mousemove", randomColor);