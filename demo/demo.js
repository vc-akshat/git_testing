// function Person(name){
//     this.name = name;
//     this.age = 22;
// }
// let object1 = new Person("akshat");
// console.log(object1)

//ES6 class syntax

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let object1 = new Person("akshat",22);
// console.log(object1)

//call method

// let employee1 = {firstName:"hello", lastName:"world"}
// let employee2 = {firstName:"good", lastName:"morning"}

// function invite(){
//     console.log(this.firstName + " " + this.lastName)
// }

// invite.call(employee1)

data = [{id:1,name:"akshat"},{id:2,name:"akshat"},{id:3,name:"akshat"},{id:4,name:"akshat"}]
let del = data.remove
console.log(del)
