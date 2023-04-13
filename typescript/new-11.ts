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
//     private readonly balance: number = 10000;
//     public depositing: number;
//     public withDraw: number

//     constructor(depositing: number, withDraw: number) {
//         this.depositing = depositing;
//         this.withDraw = withDraw;
//     }

//     deposite(): string {
//         return `Amount: ${this.balance}
//         deposite: ${this.depositing} 
//             total amount: ${this.balance + this.depositing}`
//     }
//     withDrawAmount(): string {
//         return `withDraw: ${this.withDraw}
//         total amount: ${this.balance + this.depositing - this.withDraw}`
//     }
// }

// let bankDetails = new BankAccount(1000, 5000)
// console.log(bankDetails.deposite());
// console.log(bankDetails.withDrawAmount());

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
//     protected releaseDate: number; 

//     constructor(releaseDate: number){
//         this.releaseDate = releaseDate
//     }

//     yearDifference(){
//         let date: Date = new Date()

//         let date1 = (this.releaseDate - date.getFullYear())
//         console.log("release year: " + this.releaseDate)
//         return date1
//     }
// }

// let videoGame = new VideoGame(2020)

// console.log(videoGame.yearDifference())


// task 6

// class ShoppingCart{
//     private itemCart: string;
//     private readonly totalCost: number;
//     static itemArray: string[] = [];

//     constructor(item: string){
//         this.itemCart = item
//     }

//     public addItem():string[]{

//         ShoppingCart.itemArray.push(this.itemCart);
//         return ShoppingCart.itemArray;
//     }
//     public removeItem():string[] {

//         ShoppingCart.itemArray.pop();
//         return ShoppingCart.itemArray;
//     }

// }
// let cart = new ShoppingCart("shoes")
// console.log(cart.addItem())
// console.log(cart.addItem())
// console.log(cart.addItem())
// console.log(cart.removeItem())



// task 7

// class Bank {
//     private bankName: string;
//     private bankAssets: number;
//     static noOfBank: number = 0;

//     constructor(bankName: string) {
//         this.bankName = bankName;
//         Bank.noOfBank++
//     }

//     static getCount(){
//         console.log(`${Bank.noOfBank} banks in your country.`)
//     }
// }

// let bank = new Bank("BOB")
// let bank1 = new Bank("BOB")
// let bank2 = new Bank("BOB")
// let bank3 = new Bank("BOB")
// Bank.getCount()


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

//     private name : string;
//     private static menu : string[] = [];

//     constructor(item:string){
//         Restaurant.menu.push(item)
//     }

//     public static newItem():void {
//         console.log(Restaurant.menu)
//     }
// }

// let restaurant = new Restaurant("tea");
// Restaurant.newItem();


// task 10

// abstract class Shape {
//     private readonly shapeArea: number;

//     protected abstract getArea()

//     abstract calculatePerimeter()
// }

// class Circle extends Shape {
//     radius: number
//     constructor(radius: number) {
//         super();
//         this.radius = radius
//         this.getArea();
//     }

//     protected getArea() {
//         return `circle radius: ${3.14 * (this.radius ** 2)}`;
//     }

//     calculatePerimeter() {
//         return `circle perimeter: ${2 * 3.14 * this.radius}`;
//     }
// }
// class Square extends Shape {
//     length: number;
//     constructor(length: number) {
//         super();
//         this.length = length
//     }

//     protected getArea() {
//         return `Square length: ${this.length ** 2}`;
//     }

//     calculatePerimeter() {
//         return `Square perimeter: ${4 * this.length}`;
//     }
// }

// class Rectangle extends Shape {
//     length: number;
//     width: number;
//     constructor(length: number, width: number) {
//         super();
//         this.length = length
//         this.width = width
//     }

//     protected getArea() {
//         return `rectangle length: ${this.length * this.width}`;
//     }

//     calculatePerimeter() {
//         return `rectangle perimeter: ${2 * (this.length + this.width)}`;
//     }
// }

// let circle = new Circle(5)
// console.log(circle.calculatePerimeter())
// let square = new Square(5)
// console.log(square.calculatePerimeter())
// let rectangle = new Rectangle(5,5)
// console.log(rectangle.calculatePerimeter())

