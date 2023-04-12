// task 1
// class Car {
//     private make: string = "ford";
//     private model: string = "mustang";
//     public fullName(){
//         return `${this.make} ${this.model}`;
//     }
// }
// let car = new Car()
// console.log(car.fullName()); 
// task 2
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = "Akshat";
        this.age = 22;
        this.name = name;
        this.age = age;
        this.count = Person.count++;
    }
    Object.defineProperty(Person.prototype, "newName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "newAge", {
        get: function () {
            return this.age;
        },
        set: function (Age) {
            this.age = Age;
        },
        enumerable: false,
        configurable: true
    });
    Person.getCount = function () {
        return "count = ".concat(Person.count);
    };
    Person.prototype.checkAge = function () {
        if (this.age > 18) {
            return "".concat(this.name, " is Adults");
        }
        else {
            return "".concat(this.name, " is not Adults");
        }
    };
    Person.count = 0;
    return Person;
}());
var person = new Person("Akshat Patel", 25);
console.log(person);
console.log(person.checkAge());
console.log(Person.getCount());
var person1 = new Person("Patel", 16);
console.log(person1);
console.log(person1.checkAge());
console.log(Person.getCount());
var person2 = new Person("ajay", 50);
console.log(person2);
console.log(person2.checkAge());
console.log(Person.getCount());
// task 3
// class BankAccount {
//     private readonly balance: number;
//     public depositing: number;
//     public withDraw: number
// }
// task 4
// class Book {
//     private author: string;
//     private title: string;
//     static numberOfBook: number;
//     protected numberBook(numberOfBook){
//         return numberOfBook
//     }
// }
// tassk 5
// class VideoGame {
//     protected gameDeveloper: string;
//     protected releaseDate: number = 2023;
//     public numberOfYearReleased(){
//         return this.releaseDate;
//     }
// }
// let videoGame = new VideoGame()
// console.log(videoGame.numberOfYearReleased());
// task 6
// class ShoppingCart{
//     private itemCart: string;
//     private readonly totalCost: number;
//     public addItems: number;
//     public remoeItems: number;
// }
// task 7
// class Bank {
//     private bankName: string;
//     private bankAssets: number;
//     static noOfBank: number = 20;
// }
// console.log(Bank.noOfBank)
// task 8
// class User {
//     private readonly userEmail: string;
//     private password: number;
//     public loggingIn() {
//         console.log("this is log in");
//     }
//     public loggingOut() {
//         console.log("this is log out");
//     }
// }
// task 9
// class Restaurant {
//     private restaurantName: string;
//     private menu: string;
//     public newItem() {
//         console.log("add new items");
//     }
// }
// let restaurant = new Restaurant();
// restaurant.newItem();
// task 10
// class Shape {
//     private readonly shapeArea: number;
//     public getArea() {
//         console.log("this is area");
//     }
//     public calculatePerimeter() {
//         console.log("this is Perimeter");
//     }
// }
// let shape = new Shape();
// shape.getArea();
// shape.calculatePerimeter();
// class Person {
//         static count: number = 0;
//         private _name: string = "";
//         private _age: number = 0;
//         constructor(name: string, age: number) {
//             this._name = name;
//             this._age = age;
//             Person.count++
//         }
//         static getCount(): string {
//             return `Count : ${this.count}`;
//         }
//         checkAge(): string {
//             if (this._age > 18) {
//                 return `${this._name} is  Adults`
//             } else {
//                 return `${this._name} is not Adults`
//             }
//         }
//         get name(): string {
//             return this._name;
//         }
//         set name(name: string) {
//             console.log("inside");
//             this._name = name;
//         }
//         get age(): number {
//             return this._age;
//         }
//         set age(age: number) {
//             this._age = age;
//         }
//     }
//     let omi = new Person("omi", 89);
//     console.log("age : ", omi.age);
//     console.log(omi.checkAge());
//     console.log(Person.getCount());
//     let ami = new Person("ami", 9);
//     console.log(ami.checkAge());
//     console.log(Person.getCount());
//     console.log("------------");
