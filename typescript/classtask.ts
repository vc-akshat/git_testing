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

interface vehicle{
    car : string
    truck : string
    motorcycle : string
}

class Vehicle implements vehicle{
    car: string
    truck : string
    motorcycle : string

    constructor(car:string, truck:string, motorcycle:string){
        this.car = car,
        this.truck = truck,
        this.motorcycle = motorcycle,
        this.carMethod(),
        this.truckMethod(),
        this.motorcycleMethod()
    }
    
    carMethod(){
        console.log(this.car + " is a car")
    }

    truckMethod(){
        console.log(this.truck + " is a truck")
    }

    motorcycleMethod(){
        console.log(this.motorcycle + " is a motorcycle")
    }

}

let vehicleDisplay = new Vehicle("BMW","Tata","Honda")

console.log(vehicleDisplay)