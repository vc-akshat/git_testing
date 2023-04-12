// task 1
// abstract class Shape {
//     abstract calculateArea(): number;
// }
// class Circle extends Shape{
//     radius: number;
//     constructor(radius: number){
//         super();
//         this.radius = radius;
//     }
//     calculateArea(): number {
//         const pi = 3.14;
//         return pi * (this.radius ** 2);
//     }
// }
// class Square extends Shape{
//     length: number;
//     constructor(length: number){
//         super();
//         this.length = length
//     }
//     calculateArea(): number {
//         return this.length ** 2
//     }
// }
// class Rectangle extends Shape{
//     length: number;
//     height: number;
//     constructor(length: number, height: number){
//         super();
//         this.length = length;
//         this.height = height;
//     }
//     calculateArea(): number {
//         return this.length * this.height
//     }
// }
// let circle = new Circle(2);
// console.log(circle.calculateArea());
// let square = new Square(5);
// console.log(square.calculateArea());
// let rectangle = new Rectangle(2,5);
// console.log(rectangle.calculateArea());
// task 2
// abstract class Vehicle {
//     make: number;
//     model: string;
//     year: number;
//     constructor(make: number, model: string, year: number) {
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
//     abstract displayVehicle(): void;
// }
// class Car extends Vehicle{
//     name: string;
//     constructor(make: number, model: string, year: number, name: string){
//         super(make,model,year);
//         this.name = name;
//     }
//     displayVehicle(): void {
//         console.log(`${this.name} make: ${this.make} model: ${this.model} year : ${this.year} is a car`);
//     }
// }
// class Truck extends Vehicle{
//     name: string;
//     constructor(make: number, model: string, year: number, name: string){
//         super(make,model,year);
//         this.name = name;
//     }
//     displayVehicle(): void {
//         console.log(`${this.name} make: ${this.make} model: ${this.model} year : ${this.year} is a truck`);
//     }
// }
// class Motorcycle extends Vehicle{
//     name: string;
//     constructor(make: number, model: string, year: number, name: string){
//         super(make,model,year);
//         this.name = name;
//     }
//     displayVehicle(): void {
//         console.log(`${this.name} make: ${this.make} model: ${this.model} year : ${this.year} is a motorcycle`);
//     }
// }
// let car = new Car(5, "X", 2023, "BMW");
// car.displayVehicle()
// let truck = new Truck(5, "X1", 2023, "Tata");
// truck.displayVehicle()
// let motorcycle = new Motorcycle(5, "X2", 2023, "Ducati");
// motorcycle.displayVehicle()
// task 3
// abstract class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     abstract displayName(): void;
// }
// class Cat extends Animal{
//     constructor(name: string, age: number){
//         super(name, age);
//     }
//     displayName(): void {
//         console.log(`this is ${this.name} and age is ${this.age}`);
//     }
// }
// class Dog extends Animal{
//     constructor(name: string, age: number){
//         super(name, age);
//     }
//     displayName(): void {
//         console.log(`this is ${this.name} and age is ${this.age}`);
//     }
// }
// class Bird extends Animal{
//     constructor(name: string, age: number){
//         super(name, age);
//     }
//     displayName(): void {
//         console.log(`this is ${this.name} and age is ${this.age}`);
//     }
// }
// let cat = new Cat("cat", 5);
// cat.displayName();
// let dog = new Dog("dog", 15);
// dog.displayName();
// let bird = new Bird("bird", 2);
// bird.displayName();
// task 4
// abstract class Employee {
//     name: string;
//     id: number;
//     constructor(name: string, id: number){
//         this.name = name;
//         this.id = id;
//     }
//     abstract displayEmployee(): void;
// }
// class Manager extends Employee{
//     constructor(name: string, id: number){
//         super(name, id);
//     }
//     displayEmployee(): void {
//         console.log(`this is ${this.name} and id is ${this.id}`);
//     }
// }
// class Engineer extends Employee{
//     constructor(name: string, id: number){
//         super(name, id);
//     }
//     displayEmployee(): void {
//         console.log(`this is ${this.name} and id is ${this.id}`);
//     }
// }
// class Accountant extends Employee{
//     constructor(name: string, id: number){
//         super(name, id);
//     }
//     displayEmployee(): void {
//         console.log(`this is ${this.name} and id is ${this.id}`);
//     }
// }
// let manager = new Manager("manager", 50);
// manager.displayEmployee();
// let engineer = new Engineer("engineer", 100);
// engineer.displayEmployee();
// let accountant = new Accountant("accountant", 10);
// accountant.displayEmployee();
// task 5
// class Student{
//     private _firstName: string = "Akshat";
//     private _lastName: string = "Patel";
//     private _id: number;
//     get studentId(){
//         return this._id;
//     }
//     set studentId(id: number){
//         let regEx = /\d{7}$/g;
//         let theId = id.toString();
//         if(theId.match(regEx)){
//             this._id = id;
//         }
//         else{
//             // console.log("enter id 7 digit value")
//             // this._id = "enter id 7 digit value";
//             throw new Error("enter id 7 digit value")
//         }
//     }
// }
// let student = new Student();
// student.studentId = 10100;
// console.log(student);
// task 6
var Book = /** @class */ (function () {
    function Book() {
        this._title = "akshat";
        this._author = "hello";
    }
    Object.defineProperty(Book.prototype, "bookIsbn", {
        get: function () {
            return this._isbn;
        },
        set: function (isbn) {
            var regEx = /\d{13}$/g;
            if (isbn.match(regEx)) {
                var part1 = isbn.slice(0, 4);
                var part2 = isbn.slice(4, 5);
                var part3 = isbn.slice(5, 9);
                var part4 = isbn.slice(9, 13);
                var getAns = "".concat(part1, "-").concat(part2, "-").concat(part3, "-").concat(part4);
                this._isbn = getAns;
                // console.log(ans)
            }
            else {
                throw new Error("only 13 digit valid");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var book = new Book();
book.bookIsbn = "354541212346";
console.log(book);
