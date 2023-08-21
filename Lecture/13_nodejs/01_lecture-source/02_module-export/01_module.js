/*
    모듈이란?

        자바스크립트는 웹페이지의 보조적인 기능을 수행하기 위해 만들어진 한정적인 언어였다.
        따라서 다른 언어에 비해 부족한 부분이 있는 것이 사실이며, 그 대표적인 것이 모듈 개념이다.
        브라우저 상에서 동작하는 js는 script 태그를 이용하여 여러 개의 script 파일을 하나로 합쳐 사용한다
        이때 js 파일들은 동일한 유효범위(scope)를 가지게 되어 전역변수 중복과 같은 문제가 발생할 수 있었다

        Node.js를 이용해 js를 client side에 국한된 것이 아닌 server side에서도 사용하고자 할 때,
        위의 모듈 문제는 반드시 해결해야 하는 핵심 과제였고,
        Node.js는 모듈로 각 기능을 분할할 수 있는 기능을 추가하게 되었다

        이 때 모듈은 자신만의 독립적인 실행 영역(scope)를 가지게 되며,
        클라이언트 사이드에서 발생하던 전역 변수 중복 문제가 발생하지 않게 된다

        모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개하며,
        공개된 모듈은 require 함수를 사용하여 임포트 할 수 있다
        (export , export default, import 방식은 ES6 이후에 추가된 문법이기 때문에
        commonJS에 포함되지 않아 트랜스파일링이 필요하다)

        javascript의 모듈 시스템은 대표적으로 ESM, CommonJS라는 두 가지 기술이 존재한다
        현재 node.js는 ESM, CommonJS를 모두 지원한다

            종류            ESM             CommonJS
        ----------------------------------------------------------------
        제정시기       ES6에서 제정됨     ESM 이전의 대표적인 비표준
            문법        import / export    require / module.exports
        Node.js 지원         Y                  Y
        트랜스파일링        필요               불필요
        ----------------------------------------------------------------
*/

const rectangle = require('./rectangle');

console.log(rectangle);

console.log(`너비 2 높이 3인 직사각형의 넓이 : ${rectangle.area(2, 3)}`);
console.log(`너비 2 높이 3인 직사각형의 둘레 : ${rectangle.perimeter(2, 3)}`);
