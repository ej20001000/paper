// 숫자 타입으로 변환

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(typeof Number(10));
console.log(Number(true));

// 2. ParseInt, parseFloat 함수 이용
console.log(typeof parseInt('10'));
console.log(typeof parseFloat('10'));
console.log(parseInt(10.01));
console.log(parseFloat(10.01));

// 3. * 산술 연산자 이용
console.log(typeof ('10' * 1));
console.log('10.01' * 1);
console.log(true * 1);