// interface vehicle {
//     vehicleName: string;
//     vehicleMethod(): void
// }
// class Car implements vehicle {
//     vehicleName: string;
//     constructor(vehicleName: string) {
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }
//     vehicleMethod() {
//         console.log(this.vehicleName + " is a car");
//     }
// }
// class truck implements vehicle {
//     vehicleName: string;
//     constructor(vehicleName: string) {
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }
//     vehicleMethod() {
//         console.log(this.vehicleName + " is a truck");
//     }
// }
// class motorcycle implements vehicle {
//     vehicleName: string;
//     constructor(vehicleName: string) {
//         this.vehicleName = vehicleName,
//         this.vehicleMethod()
//     }
//     vehicleMethod() {
//         console.log(this.vehicleName + " is a motorcycle");
//     }
// }
// let vehicleDisplay = new Car("BMW")
// let vehicleDisplay1 = new truck("Tata")
// let vehicleDisplay2 = new motorcycle("Honda")
// console.log(vehicleDisplay)
// console.log(vehicleDisplay1)
// console.log(vehicleDisplay2)

// class Boy {
// 	name : string
// 	about() : void {
// 		console.log(this.name +" is an intelligent boy..")
// 	}
// }

// class Student extends Boy {
// 	rollnumber : number;
// 	marks: number;
// 	constructor(rollnumber : number, marks : number,
// 	name1 : string){
// 		super();
// 		this.rollnumber = rollnumber
// 		this.name = name1
// 		this.marks = marks
// 	}
// 	displayStudentInformation() : void {
// 		console.log("Name : "+ this.name +", Roll Number : " + this.rollnumber +", Scores : " + this.marks + " out of 100" )
// 	}
// 	about() : any {
// 		// Invokes parent class about() method here also.
// 		super.about();
// 		console.log(this.name + " scores well...")
// 	}
// }

// let student = new Student(2, 96, "Rohit");
// student.displayStudentInformation();
// student.about();


function demo( y: number){
    return y
}
console.log(demo(10))