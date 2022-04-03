
let getName = prompt("Please enter your name.");
let getNum1 = prompt("Give me a numbah plox");
let getNum2 = prompt("Anotha one (number)");
    getNum1 = parseInt(getNum1); 
    getNum2 = parseInt(getNum2); 

const nameFunc = name => {
    document.write(`You are going to have a wonderful day, ${name}. `); 
}

const numFunc = (getNum1, getNum2) => {
    let num = getNum1 + getNum2; 
    document.write(`BTW, the sum of your numbahs is ${num}.`); 
}

nameFunc(getName); 
numFunc(getNum1, getNum2); 
