const triangle = require('./triangle')

console.log(triangle);

const {area, perimeter} = triangle(3, 4);

console.log(`area : ${area}`);
console.log(`밑변이 3 높이가 4인 직각삼각형의 면적 : ${area()}`);