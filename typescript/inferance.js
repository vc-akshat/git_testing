// task 1 
function obj(id, name) {
    return { id: id, name: name };
}
console.log(obj(1, "akshat"));
// task 2
// function arraySum(arr: number[]): number {
//     return arr.reduce((first,second) => first+second, 0);
// }
// const arr = [1,2,34,5,56,6];
// console.log(arraySum(arr));
// task 3
// function palindrom(string: (string | null)) {
//     let value = string?.split('').reverse().join('')
//     string == value ? console.log('value is palindrom') : console.log('value is not palindrom')
// }
// let string = "12121"
// palindrom(string)
// task 4
// function uppercase(array: string[]){
//     return array.map(x=>x.toUpperCase())
// }
// let array = ['hello','world','good']
// console.log(uppercase(array))
// task 5
// interface rectangleType{
//     width: number;
//     height: number
// }
// function rectangle(){
//     let rectangleDimensions: rectangleType = {
//         width: 10,
//         height: 10
//     }
//     return (rectangleDimensions.width * rectangleDimensions.height)
// }
// console.log(rectangle())
// task 6
// function evenValue(array1:number[]){
//     return array1.filter(x => (x%2 == 0))
// }
// let array1 = [1,2,4,3,6]
// console.log(evenValue(array1))
// task 7
// function betweenMarkers(string1: string, string2: string, string3: string){
//     let findIndex1 = string1.indexOf(string2)
//     let findIndex2 = string1.indexOf(string3)
//     let value = string1.substring(findIndex1+1,findIndex2)
//     console.log(value)
// }
// betweenMarkers("What is >apple<", ">", "<");
// betweenMarkers("What [apple]", "[", "]");
