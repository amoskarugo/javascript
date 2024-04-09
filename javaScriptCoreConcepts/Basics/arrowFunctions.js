console.clear();
// arrow functions are a concise way to write function expresxsions
// good for simple functions that you only write once
// (parameters) => some code 




const materials = ["hydrogen", "oxygen", "hilieum", "lithium"];






(function(){
    return 1+ 2;
})
let result = a => a + 100; 
// omit parenthesis only if the function has a single parameter.
// curly braces can also be omitted if the function returns an expresion directly

const numbers = [1,3, 8 ,5,6, 6,7,9, 10];


const sqaures  = numbers.map(element => Math.pow(element, 2));
const cubes  = numbers.map(element => Math.pow(element, 3));
const oddNums = numbers.filter(element => element % 2 !== 0);
const evenNums = numbers.filter(element => element % 2 === 0);


// setTimeout(() => console.log("hello"), 3000);
console.log(evenNums);