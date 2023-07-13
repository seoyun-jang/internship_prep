// alter : 알림창
alert('ok');

console.log(50-3);

// 처음 변수를 생성할 때만 let을 붙인다.
let a = 50;
let b = 3;
a = b;

console.log(a,b);
console.log("안녕하세요");

//let과 const의 차이
let c = 10;
let d = 20;
c = d;
c = 50000; 
// 한번 만든 변수를 계속 사용할 수 있다.

/*
const e = 55;
let f = 3;

e = f;
 const는 재사용할 수 없다 Uncaught TypeError: Assignment to constant variable
*/

let g = true;
console.log(g);

console.log(5 > 3);
console.log(5 < 3);
console.log(5 != 3);

// bool type

let happyFace = "😁";
console.log(happyFace);
// emoji도 출력이 가능하다, 단 문자열로 인식하기 때문에 따옴표로 감싸야한다.

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(30 % 4);
console.log("3" ** 2);


// 조건문
let date = new Date();
console.log(date);

let hour = date.getHours();
console.log(hour);

// 1. if문
if (hour < 12){
    console.log('오전입니다.')
};

// 2. if-else 문
if (hour < 12){
    console.log('오전입니다.')
} else {
    console.log('오후입니다.')
};

// 3. if-elseif 문
if (hour < 12){
    console.log('오전입니다.')
} else if (hour > 12 & hour <7){
    console.log('저녁입니다.')
} else{
    console.log('밤입니다.')
};

// switch
let n = 50;
switch(n % 2){
    case 0:
        console.log('짝수입니다.');
        break;
    case 1:
        console.log('홀수입니다');
        break;
    default:
        console.log('숫자가 아닙니다.');
        break;
}