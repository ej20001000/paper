// ||(논리 or 연산자), &&(논리 and 연산자), !(논리 부정 연산자)

console.log('apple' || 'banana')
console.log('false' || 'banana')
console.log('apple' || false);

console.log('apple' && 'bananas');
console.log('apple' && false);
console.log(false && 'bananas');

var num = 1;

if(num % 2 == 0) {
    console.log('짝수입니다');
} else console.log('홀수입니다');

num % 2 == 0 && console.log('짝수입니다');
num % 2 == 0 || console.log('홀수입니다');

var obj = null;
var value = obj || 'hello';
console.log(value);