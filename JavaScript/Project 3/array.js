let num1 = prompt("Please enter a numbah.");
let num2 = prompt("Give me another numbah plox");
let num3 = prompt("It's the final numbaaaaaaah.");
    num1 = parseInt(num1); 
    num2 = parseInt(num2); 
    num3 = parseInt(num3); 

let nums = [num1, num2, num3]; 
let total = 0; 

for (let i = 0; i < nums.length; i++) {
    total += parseInt(nums[i]);
} 

document.write(`The sum of these flippin numbahs is ${total}.`); 