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

let daysOfWeek = ["Monday", "Tuesday", "wednesday",
                  "Tursday", "Friday", "Saturday", "Sunday"]

console.log(daysOfWeek[1]); // 0부터 시작

// Array & Object

let obj = {
    name : "yun",
    age : 27,
    occupation: "student",
    isMarried: false,
    favoriteMovies: ["Elemental", "inception"],
    favoriteFoods: [{
        food: "Tomato",
        isHealthy: true},
        {food: "Pizza",
        isHealthy: false}]
};

console.log(obj.name);


// Function
function sayHello(){
    console.log("hello");
}

sayHello();
sayHello();
sayHello();

function addNum(a, b) {
    console.log(a + b);
}

addNum(2, 3);

let result = addNum(3, 4);
console.log(result);

let obj1 = {
    name: "Kim",
    age: 34,
    sayHi: function(){
        return "Hi 12312131312313"
    }
}

console.log(obj1.sayHi());

function Hello(name, age){
    console.log(`hello ${name} you are ${age} years old`);
}

Hello("John", 22);

//function은 object안에서도 사용할 수 있다.
// function은 object안의 변수들을 사용할 수 있다.

let myObject = {
    name: "Kim",
    age: 32,
    sayMyName: function() {
        console.log(`My name is ${this.name}.`);
    }
}

myObject.sayMyName();


// 반복문 for
for(let i = 0; i < 5; i++) {
    console.log(i);
}

for (let k = 0; k<30; k++) {
    if (k % 2 == 0) {
        console.log(k);
    }
}

let array = ['사과', '배', '복숭아'];

for (let j=0; j < array.length; j++) {
    console.log(array[j]);
}

let m = 0
for (m; m < 3; m = m + 2) {
    console.log(m);
}

for(m = 3; m < 5; m = m + 4) {
    console.log(m);
}


// 반복문 for in
for (let index in array){
    console.log(index);
}

// 반복문 for of
for (let element of array) {
    console.log(element);
}

/* 
for in의 경우 배열의 index를,
for of는 배열의 value를 반환한다. 
*/


//while 문
n = 0
while (n <5){
    console.log(n);
    n = n + 2;
}

console.log('바깥', n)

// do-while 문

let value = 0
do {
    console.log(value);
    value++
} while (value <5);

console.log('바깥', value)

/* 
while은 조건을 만족하는 동안 loop가 반복된다.
do while문의 경우 do가 먼저 수행되기 때문에 while과 수행 횟수가 다를 수 있다.
*/


let arr = [1, 2, 3];

// 배열 마지막에 인자 추가
arr.push("hello");
console.log(arr)

// 배열의 마지막값을 제거
arr.pop();
console.log(arr);

arr = [1, 2, 3,
      "Hello"];

// 배열을 역순으로 정렬
arr.reverse();
console.log(arr)

// 배열을 정렬
arr = [3, 4, 2, 1]
arr.sort()


 // 연산자 - and && 
 // ex. 여자이면서 25세 이상인 경우
 function andEx(gender, age){
    if (gender == 'female' && age > 24){
        return true;
    }
    return false;
 }

 console.log(andEx("male", 26));

 // 연산자 - or ||
// ex. 여자이거나 25세 이상인 경우
function orEx(gender, age){
    if (gender == 'female' || age > 24){
        return true;
    }
    return false;
 }

 console.log(orEx("male", 26));
  
