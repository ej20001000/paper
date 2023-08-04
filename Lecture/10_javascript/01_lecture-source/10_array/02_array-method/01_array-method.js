// 배열 메소드

const arr = [];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회', '물회']

//Array.prototype.indexOf : 배열에서 요소가 위치한 인덱스를 리턴

console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`);
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`);
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`);
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`);

console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`);
