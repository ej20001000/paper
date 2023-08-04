// 전역과 지역 스코프
var x = 'global x';
var y = 'global y';

function outer() {
    var z = 'outers local z';

    console.log(x, y, z);
    function inner() {
        var x = 'inners local x';

        console.log(x,y,z);
    }

    inner();
}

outer();

console.log(x);
console.log(z);