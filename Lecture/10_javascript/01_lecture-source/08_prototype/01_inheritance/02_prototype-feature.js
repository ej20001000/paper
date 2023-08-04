const user = {
    id: 'user',
    login: function() {
        console.log(`${this.id}님이 로그인 되었습니다`);
    }
}

const student = {
    __proto__: user
}

student.id = 'user01';

student.login();

console.log(user);
console.log(student);

for(let prop in student) {
    console.log(prop);
    const isOwn = student.hasOwnProperty(prop);
    console.log(isOwn);
}