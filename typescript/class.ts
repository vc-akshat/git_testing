// class Animal{
//     move(diatance:number = 0){
//         console.log(`animal moved ${diatance}`);
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log('bhow bhow')
//     }
// }

// let dog = new Dog();
// dog.bark();
// dog.move(20)


// class Animal {
//     name: string;
//     constructor(theName: string) {
//       this.name = theName;
//     }
//     move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//   }
   
//   class Snake extends Animal {
//     constructor(name: string) {
//       super(name);
//     }
//     move(distanceInMeters = 5) {
//       console.log("Slithering...");
//       super.move(distanceInMeters);
//     }
//   }
   
//   class Horse extends Animal {
//     constructor(name: string) {
//       super(name);
//     }
//     move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//     }
//   }
   
//   let sam = new Snake("Sammy the Python");
//   let tom: Animal = new Horse("Tommy the Palomino");
   
//   sam.move();
//   tom.move(34);


class car {
  name: string;
  constructor(name:string){
    this.name = name;
  }
}