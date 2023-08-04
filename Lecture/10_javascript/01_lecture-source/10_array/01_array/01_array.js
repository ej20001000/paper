// 배열은 여러 개의 값을 순차적으로 나열한 자료구조이다.
// 배열은 하나의 타입만 저장하는 것이 아닌 모든 타입을 전부 저장할 수 있다.
// 배열은 값을 저장한 순서를 유지하고 있으며, key로 index를 이용하여 관리한다.

// 1. 배열을 리터럴을 통해 생성
const arr = ['바나나', '복숭아', '키위'];
console.table(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);
console.log(arr2.length);

// 전달된 인수가 1개이고 숫자 타입인 경우 length 프로퍼티에 값이 변경되어
// 전달한 인수 길이 만큼의 배열을 생성한다.
const arr3 = new Array(10);
console.log(arr3);
console.log(arr3.length);

// 전달된 인자가 2개 이상이거나 1개이지만 숫자가 아닌 경우 모든 인자를 요소로 가지는 배열을 생성한다.
const arr4 = new Array(1, 2, 3);
console.log(arr4);
console.log(arr4.length);

// 3. Array.of 메소드
// 전달된 인자를 모두 요소로 가지는 배열을 생성한다.
console.log(Array.of(10));
console.log(Array.of(1,2,3));

console.log(arr4[0]);

for(let i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

console.log(typeof arr4);

for(let key in arr4) {
    console.log(key);
}

for(let i in arr4) {
    console.log(arr4[i]);
}

