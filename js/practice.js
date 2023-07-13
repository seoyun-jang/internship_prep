
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