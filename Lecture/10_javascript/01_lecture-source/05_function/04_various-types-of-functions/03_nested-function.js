// 중첩 함수

function outer() {
    var outerVal = "외부함수";

    function inner() {
        let innerVal = "내부함수";

        console.log(outerVal, innerVal);
    }
    
    inner();
}

outer();