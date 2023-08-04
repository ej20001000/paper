// 일급객체
// 값으로 취급할 수 있는 객체를 일급객체라고 한다
// 함수는 일급객체이다. 따라서 함수를 값으로 취급할 수 있다

// 변수에 저장잘 수 있다.
var hello = function() {
    return "안녕하세요";
}

// 2. 객체에 저장할 수 있다
var obj = { hello };

// 3. 함수의 매개변수에 전달할 수 있다
function repeat(func, count) {
    for(var i = 0; i < count; i++) {
        console.log(func());
    }

    return function() {
        console.log((`${count}번 반복 완료`));
    }
}

repeat(obj.hello, 5)();