//To get the integers in range

// function findInteger(x,y){
//     for(let i=x; i<y-1; i++){
//         console.log(i + 1)
//     }
// }
// let answer = findInteger(2,9)
// console.log(answer)

// compute the exponent of a number.

// function sumOfarray(x,n){
//     if(n == 0){
//         return 1
//     }
//     else{
//         return x * sumOfarray(x,n-1) * x
//     }
// }
// let ans = sumOfarray(4,2)
// console.log(ans)

// fibonacci

function fibonacciNumber(n){
    if (n === 0 || n === 1) 
  {
    return String(n)
  }
    return fibonacciNumber(Math.floor(n / 2)) + String(n % 2)
}
console.log(fibonacciNumber(101))