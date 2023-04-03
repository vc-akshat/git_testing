// function add(x="hello", y:number):string{
//     return x + y;
// }
// console.log(add("good",5))

interface objectType{
    name : string,
    age : number
}

function objectFirst(){
    let a:objectType = {
        name: "akshat",
        age:22
    }
    return a;

}
console.log(objectFirst())