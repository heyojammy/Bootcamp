/*create a function that takes in two arguments. 
arguments will be integers bigger than zero
return an object whose keys are the numbers ranging between the arguments (ex: arg = 1, 5; output 1, 2 3 4 5)
the value of the object even or odd based on the keys */

//1. Create function
//2. iterate through numbers => start at arg one and end at arg two. For loop?
//3. What does loop need to do? It needs to tell us if number is even or odd. Assign those as key value pairs
//4. set up condition: if numbers even, do ______ if number is odd, do _____
//5. Key = number (index), Value = string (even or odd)
//6. How add properties to the object? bracket notation obj[variablename]
//7. return the object. Return outside loop. 

let obj = {};

const evenOdd = (num1, num2) => {

for (let index = num1; index <= num2; index++){
    obj[index] =  index % 2 === 0 ? "even":"odd";
    }
    return obj; 
}

console.log(evenOdd(1,5));