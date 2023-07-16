
/* 1. 오브젝트 내에 인자(argument)를 받는 함수를 만들어서 짝수인지 홀수인지 판단하기*/
// let obj = {
//     input: Number(prompt('홀/짝 판별하기 : 숫자를 입력하세요 : ','숫자')),
//     num: function(input){
//         if (input % 2 ==0){
//                 console.log("짝수입니다.")
//         } else if (input % 2 == 1){
//             console.log("홀수입니다")
//         } else{
//             console.log("숫자가 아닙니다")
//         }
//     }
// }

// console.log(obj.num())

// ------------------------------------------------------------------

let obj ={
    oddOrEven: function(num){
        if(num % 2 == 0){
            console.log(num,'은(는) 짝수입니다.')
        } else{
            console.log(num,'은(는) 홀수입니다.')
        }
    }
}

console.log(obj.oddOrEven(4))

/* 2. 배열 내 최대값 찾기, 
단 배열을 인자로 받는 함수를 만들어서 그 배열의 최대값을 반환(또는 출력)*/
let array = [1, 3, 5, 4, 26, 46];

function findMax(arr){
    max = 0;

    for(i in array){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max
}

console.log(findMax(array))


// 3. 함수를 이용한 구구단 만들기

let input = Number(prompt('입력 : ', '숫자'))
for (i=1;i<10;i++){
    console.log(`${input} * ${i} = ${input * i}`)
}


// 함수로 만들기
function gugudan(num){
    for (i=1;i<10;i++){
        console.log(`${input} * ${i} = ${input * i}`)
    }
}

gugudan(5)

/* 1 부터 30까지 숫자를 돌면서 3의 배수면 "fizz", 5의 배수면 "buzz",
3과 5의 배수면 "fizzbuzz", 나머지는 그냥 출력.*/

for(i=1;i<31;i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    } else if(i % 3 == 0){
        console.log("fizz")
    } else if(i % 5 == 0){
        console.log("buzz")
    } else{
        console.log(i)
    }
} 

//solution

function fizzbuzz(){
    for(i=1; i<31; i++){
        if (i % 3 ==0 && i % 5 ==0){
            console.log('fizzbuzz')
        }else if (i % 3 == 0){
            console.log('fizz')
        } else if (i % 5 == 0){
            console.log('buzz')
        } else{
            console.log(i)
        }

    }
}

fizzbuzz()


/*반복문을 이용해서 원하는 데이터 출력하기 */
let data = [
    {no:0, id:"red", sex:"남자", age:21},
    {no:1, id:"yellow", sex:"남자", age:17},
    {no:2, id:"orange", sex:"여자", age:16},
    {no:3, id:"green", sex:"여자", age:55}
    
];

for(let d of data){
    if(d.age > 21 && d.sex == "여성"){
        console.log(d)
    }
}

