
const animals = require('animals');
const Log = require ('log.pets');

//Get a random animal's name to appear in the console using the “animals” package.
// console.log(animals());

//Get a lion ascii art to appear using the “Log.pets” package.
// console.log(Log.lion());

//use them both together so that the animal names from the “animals” package appear on the zoo sign from the Log.zoo method in the “Log.pets” package.
// console.log(Log.zoo(animals(), animals(), animals()));

// display the number of animals available for the generator?
// console.log(animals.words.length); //output 236

//Using array methods, how many animals start with the letter 'G', or display an error message if none found

const countG = animal => {
    let filter = animal.filter(name => {
        if (name[0] === "g" || name[0] === "G"){
            return true;
        } else {
            return false;
        }   
    })
    return filter.length; 
}

console.log(countG(animals.words));

//Using array methods, and the "G" from above, how can you display number of animals starting with that letter, or display an error message if none found