// 배열 고차 함수
// 고차함수 : 함수를 인자로 전달 받거나 함수를 반환하는 함수

// sort : 배열을 정렬
const numbers = [];

for(let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compare);
console.log(`숫자 오름차순 정렬 후 numbers : ${numbers}`);

// 숫자 내림차순 정렬
// numbers.sort(function (a, b) {
//     return b - a;
// });
numbers.sort((a, b) => b - a);
console.log(`숫자 내림차순 정렬 : ${numbers}`);

// foreach : for문을 대체할 수 있는 고차함수
const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index, array) => {
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})

arr.forEach(item => console.log(item * 10));

// map : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환 값들로 구성된 새로운 배열을 반환
const types = [true, 1, 'text'].map(item => typeof item);
console.log(types);

const lengths = ['apple', 'banana', 'cat', 'dog','egg'].map(x => x.length);
console.log(`lengths : ${lengths}`);

// filter : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환 값이 true인 요소로만 구성한 새로운 배열을 반환
const odds = arr.filter(i => i % 2);
console.log(odds);

// reduce : 배열을 순회하며 각 요소에 대하여 이전 콜백 함수 실행 반환값을 전달하여
//          콜백함수를 실행하고 그 결과를 반환
arr.reduce((prevVal, currVal, currIdx, array) => {
    console.log(`prevVal : ${prevVal}`);
    console.log(`currVal : ${currVal}`);
    console.log(`currIdx : ${currIdx}`);
    console.log(`array : ${array}`);
})

const sum = arr.reduce((prevVal, currVal) => {
    return prevVal + currVal;
});
console.log(`sum : ${sum}`);

// some : 배열 내의 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
let result = [1,2,3,4,5].some(item => item > 10);
console.log(`result : ${result}`);

result = [1,2,3,4,5].some(item => item > 3);
console.log(`result : ${result}`);

//every : 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
result = [1,2,3,4,5].every(item => item > 0);
console.log(`result : ${result}`);

result = [1,2,3,4,5].every(item => item > 3);
console.log(`result : ${result}`);

// find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여
//        그 결과가 참인 첫번째 요소를 반환하고 참인 요소가 존재하지 않으면 undefined를 반환
// findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행하여
//             그 결과가 참인 첫번째 요소의 인덱스를 반환하고,
//             참인 요소가 없다면 -1을 반환
const students = [
    {name : '유관순', score : 90},
    {name : '홍길동', score : 80},
    {name : '장보고', score : 70}
];

result = students.find(item => item.name === '유관순');
console.log(result);
result = students.findIndex(item => item.name === '유관순');
console.log(result);
result = students.find(item => item.name === '신사임당');
console.log(result);
result = students.findIndex(item => item.name === '신사임당');
console.log(result);

result = students.find(item => item.score >= 80);
console.log(result);
result = students.filter(item => item.score >= 80);
console.log(result);
