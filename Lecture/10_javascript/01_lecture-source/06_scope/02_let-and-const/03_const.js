
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
// const x;
const x = 1;

// const 키워드로 선언한 변수는 재할당이 금지된다.
// x = 2;

const DISCOUT_RATE = 0.15;

const price = 15000;

const discountPrice = price * (1 - DISCOUT_RATE);    

console.log(discountPrice);

// 주의사항
const student = {
    name: '오징어',
    age: 20
}

console.log(student);

student.name = '유관순';
console.log(student);

// student = {};        에러 남