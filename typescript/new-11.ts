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

// class Person {
//     static count: number = 0;
//     count: number;
//     private name: string = "Akshat";
//     private age: number = 22;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//         this.count = Person.count++;   
//     }
    
//     get newName(){
//         return this.name;
//     }

//     set newName(name: string){
//         this.name = name;
//     }

//     get newAge() {
//         return this.age;
//     }

//     set newAge(Age: number) {
//         this.age = Age;
//     }

//     static getCount(): string{
//         return `count = ${Person.count}`;
//     }

//     checkAge(): string {
    
//     if (this.age > 18) {
//         return `${this.name} is Adults`;
//     } 
//     else {    
//         return `${this.name} is not Adults`;    
//         }   
//     }
// }

// let person = new Person("Akshat Patel", 25);
// console.log(person);
// console.log(person.checkAge());
// console.log(Person.getCount());
// let person1 = new Person("Patel", 16);

// console.log(person1);
// console.log(person1.checkAge());
// console.log(Person.getCount());
// let person2 = new Person("ajay", 50);

// console.log(person2);
// console.log(person2.checkAge());
// console.log(Person.getCount());


// task 3

// class BankAccount {
//     private readonly balance: number;
//     public depositing: number;
//     public withDraw: number
// }

// let bankDetails = new BankAccount()
// bankDetails.balance //we can't use balance property

// task 4

// class Book {
//     private author: string;
//     private title: string;
//     protected static numberOfBook: number;
// }
// let book = new Book()
// Book.numberOfBook

// task 5

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
//     public removeItems: number;
// }
// let cart = new ShoppingCart()
// cart.totalCost


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
//     public loggedOut() {
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
//         console.log("this is circle area");
//     }

//     public calculatePerimeter() {
//         console.log("this is circle Perimeter");
//     }
// }

// let shape = new Shape();
// shape.getArea();
// shape.calculatePerimeter();
