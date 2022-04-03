const marvel = require('marvel-characters')

list = marvel.characters; 

console.log(marvel())

//Display the number of characters in the database
console.log(marvel.characters.length); //output 1252


//Display only characters whose names start with "man" or an error if it does not exist

//iterate through the array
//every iteration: find names w/first three letters
//evaluate the first three letters of each array
//conditional -> if "man", then return new array w/characters names
//outside iterator, 
//else, display "error"
 
const findMan = name => {
    let man = [];
    for (let index = 0; index < name.length; index++){
            let names = name[index];
            let arr = name[index].slice(0, 3);
            if (arr === "Man"){
                man.push(names); 
            }
        }
        if (man.length !== 0) {
            return man;
        } else {
            return "error"; 
        }
    }

console.log(findMan(marvel.characters));

//OR

const findManCharas = name => {
    let manCharas = marvel.characters.filter(chara => {
    return chara.slice(0, 3) === "Man";
});

if (manCharas.length === 0){
    return "error - does not exist"
    } else {
    return manCharas;
    }
}

console.log(findManCharas(marvel.characters)); 

//Display "iron man" or an error if it does not exist

const findIronMan = name => {
    let ironMan = marvel.characters.filter(chara => {
    return chara === "Iron Man";
});

if (ironMan.length === 0){
    return "error - does not exist"
    } else {
    return ironMan;
    }
}

console.log(findIronMan(marvel.characters)); 



//display "batman" or an error if it does not exist

const findBatMan = name => {
    let batMan = marvel.characters.filter(chara => {
    return chara === "Bat Man";
});

if (batMan.length === 0){
    return "error - does not exist"
    } else {
    return batMan;
    }
}

console.log(findBatMan(marvel.characters)); 