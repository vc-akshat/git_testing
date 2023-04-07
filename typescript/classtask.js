// task 1 : get and set each property
// class Person{
//     name : string;
//     age : string;
//     address : string
//     constructor(name : string, age: string, address: string){
//         this.name = name,
//         this.age = age,
//         this.address = address
//     }
//     get name1(){
//         return `${this.name} ${this.age} ${this.address}`
//     }
//     set name1(value: string){
//         this.name = value,
//         this.age = value,
//         this.address = value
//     }
// }
// let person = new Person("akshat", "22", "ahmedabad")
// console.log(person)
// person.name = "patel";
// person.age = "25";
// person.address = "Viitorcloud";
// console.log(person.name1)
// task 5 : find shape
// interface shapeData{
//     width: number
//     height: number
//     rectangle() : void
// }
// class Shape implements shapeData{
//     constructor(public width: number,public height: number) {
//         this.width = width,
//         this.height = height
//     }
//     rectangle(){
//         if(this.height === this.width){
//             console.log("this is square")
//         }else{
//             console.log("this is rectangle")
//         }
//     }
// }
// let shape = new Shape(20,10)
// shape.rectangle()
// task 4 : Create a TypeScript interface that defines the properties and methods of a vehicle. Implement the interface in classes that represent a car, truck, and motorcycle.
// interface vehicle{
//     vehicleName : string
//     vehicleMethod() : void
// }
// class Car implements vehicle{
//     vehicleName : string
//     constructor(vehicleName : string){
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }    
//     vehicleMethod(){
//         console.log(this.vehicleName + " is a car")
//     }
// }
// class truck implements vehicle{
//     vehicleName : string
//     constructor(vehicleName : string){
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }  
//     vehicleMethod(){
//         console.log(this.vehicleName + " is a truck")
//     }
// }
// class motorcycle implements vehicle{
//     vehicleName : string
//     constructor(vehicleName : string){
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }    
//     vehicleMethod(){
//         console.log(this.vehicleName + " is a motorcycle")
//     }
// }
// let vehicleDisplay = new Car("BMW")
// let vehicleDisplay1 = new truck("Tata")
// let vehicleDisplay2 = new motorcycle("Honda")
// console.log(vehicleDisplay)
// console.log(vehicleDisplay1)
// console.log(vehicleDisplay2)
// class Game{
//     play : number
//     pause : number
//     end : number
//     constructor(play: number, pause: number, end: number){
//         this.play = play,
//         this.pause = pause,
//         this.end = end
//     }
// }
// let game = new Game(1,0,-1)
// console.log(game)
var Weather = /** @class */ (function () {
    function Weather(temperature, wind, precipitation) {
        this.temperature = temperature,
            this.wind = wind,
            this.precipitation = precipitation;
        this.temp(),
            this.windSpeed(),
            this.precipitationValue();
    }
    Weather.prototype.temp = function () {
        console.log(this.temperature + " temp.");
    };
    Weather.prototype.windSpeed = function () {
        console.log(this.wind + " wind speed.");
    };
    Weather.prototype.precipitationValue = function () {
        console.log(this.precipitation + " precipitation.");
    };
    return Weather;
}());
var weatherApp = new Weather(25, 100, 50);
console.log(weatherApp);
