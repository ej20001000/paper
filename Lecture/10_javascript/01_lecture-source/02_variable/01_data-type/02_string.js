// 02 문자열 타입
// 자바스크립트 문자열 리터럴 표기법은 3가지 제공
// '' 작은따음표, "" 큰따음표, `` 백틱

var string;
string = 'javascript';
string = "javascript";
string = `javascript`;

console.log(string);

string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";

// 템플릿 리터럴
// ES6부터 도입된 멀티 라인 문자열, 표현식 삽입 등의 편리한 문자열 처리를 제공하는 문자열 표기법이다.

var str = '안녕하세요\n반갑습니다';
"반갑습니다";

console.log(str);

var mutiline = `안녕하세요
반갑습니다`; 

console.log(mutiline);

var lastName = '홍';
var firstName = '길동';

console.log('제 이름은 ' + lastName + firstName);

console.log(`제 이름은 ${ lastName }${ firstName }입니다.`);
console.log('제 이름은 ${ lastName }${ firstName }입니다.');