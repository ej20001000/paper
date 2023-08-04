// [[Prototype]]
// Every object in javascript has a hidden [[Prototype]] property
// the value of this property is either null or referenced by other Object,
// in the case of referencing the referenced object is called prototype
// 객체에서 프로퍼티를 찾으려고 할때, 존재하지 않을 시
// 자바스크립트는 자동으로 prototype에서 프로퍼티를 찾는다.
// 이것을 프로토타입 상속이라고 한다.

const user = {
    activate: true,
    login: function() {
        console.log('로그인 확인');
    }
}

const student = {
    passion: true
}

// __proto__ [[Prototype]]의 setter getter 역할을 하는 프로퍼티이다.
student.__proto__ = user;

console.log(student.activate);
student.login();

// 프로토타입 체인
const ohgiraffersStudent = {
    class: 11,
    __proto__: student
};

console.log(ohgiraffersStudent.activate);
console.log(ohgiraffersStudent.passion);