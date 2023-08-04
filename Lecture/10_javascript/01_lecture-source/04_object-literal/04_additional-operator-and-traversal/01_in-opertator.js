var student = {
    name: '유관순',
    age: 16,
    test: undefined
}

console.log(student.name === undefined);
console.log(student.height === undefined);
console.log(student.test === undefined);

console.log("name" in student);
console.log("height" in student);
console.log("test" in student);