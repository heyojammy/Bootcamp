// JS ASSESSMENT 1 PRACTICE EXERCISES
// ! EXERCISE 1 !
// ? Create a function called secondToLast() with a parameter called `arr`
// ? It will take an array with 2 or more elements as an argument.
// ? The function should `return` the second to last element
// ? The function should not mutate the original array
// * Example Input: ["dog", "horse", "elephant", "donkey", "cat", "chicken"]
// * Example Output: "cat"

const secondToLast = arr => {
    return arr[arr.length-2];
};

secondToLast(["dog", "horse", "elephant", "donkey", "cat", "chicken"]); //output: cat;


// ! EXERCISE 2 !
// ? Create a function called firstAndLast() with a parameter called `arr`
// ? It will take an array of 3 or more elements as an argument.
// ? The function will return a string with the phrase, "____ is first, and ____ is last".
// * Example Input: ["dog", "horse", "elephant", "donkey", "cat", "chicken"]
// * Example Output: "Dog is first and chicken is last"

const firstAndLast = arr => {
    let first = arr.slice(0, 1); //OR first = arr[0];
    let last = arr.slice(arr.length-1); //OR last = [arr.length-1];
    return `${first} is first and ${last} is last`; 
}

firstAndLast(["dog", "horse", "elephant", "donkey", "cat", "chicken"]); //output: dog is first and chicken is last


// ! EXERCISE 3 !
// ? Create a function called notFirstNotLast() with a parameter called `arr`
// ? It will take an array of 3 or more elements as an argument.
// ? The function will return an array of elements that aren't the first and last elements
// ? The function should not mutate the original array
// * Example Input: ["dog", "horse", "elephant", "donkey", "cat", "chicken"]
// * Example Output: ["horse", "elephant", "donkey", "cat"]

const notFirstNotLast = arr => {
    let snipped = arr.slice(1, arr.length-1);
    return snipped;
}

notFirstNotLast(["dog", "horse", "elephant", "donkey", "cat", "chicken"]); //output: [ 'horse', 'elephant', 'donkey', 'cat' ]

// ! EXERCISE 4 !
// ? Create a function called howManyChefs() with a parameter called `chefs` 
// ? It will take an array as an argument.
// ? If there are 5 or more elements, the function should return "too many chefs"
// ? If there are 2-4 elements, the fucntion should return "just enough chefs"
// ? If there is 1 or fewer elements, the function should return "not enough chefs"
// * Example Input: ["Frederick", "Julia", "Felipe", "David"]
// * Example Output: "too many chefs"


// ! EXERCISE 5 !
// ? Create a function called makePerson() with `name`, `age`, `isSilly` as parameters
// ? `name` takes a string, `age` takes a number, and `isSilly` takes a boolean as arguments.
// ? The function should return an object with the arguments as values for corresponding keys
// * Example Inputs: "Jesus", 29, true
// * Example Output: {name: "Jesus", age: 29, isSilly: true}


// ! EXERCISE 6 !
// ! (A)
// ? Create 3 variables that represent 3 different people
// ? Use the `makePerson() function to help you accomplish this


// ! (B)
// ? Create a function called canRentCar() that has `person` as a parameter
// ? It will take an object as an argument (use the variables you made in part A)
// ? The function should return `true` if the person is 25 or older
// ? If the person has `isSilly` be `true` and they are 25 or older, then it should return the string "yes, but maybe you shouldn't"
// ? If the person is less than 25, then it should return `false`
// * Example Inputs: {name: "Jesus", age: 29, isSilly: true}
// * Example Output: "yes, but maybe you shouldn't"
//  You will use the `months` array below for exercises 7-10
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];



  // ! EXERCISE 7 !
  // ? Create a function called getMonth() with a parameter called `month` that will take a number as an argument.
  // ? The function should `return` the corresponding month where January is month 1 and December is month 12.
  // * Example Input: 2
  // * Example Output: "February"

  const getMonth = month => {
    return months[month-1]; //will output according to human counting
}

getMonth(10); //output: October
getMonth(5); //output: May


  // ! EXERCISE 8 !
  // ? Create a function called newMonth() with `month` and `placement` as parameters
  // ? `month` will take a string and `placement` will take a number
  // ? The function should `return` a new array with the new month placed after the number month `placement` corresponds too (I hope that makes sense...)
  // * Example Input: "Dogtober", 2
  // * Example Output: ["January","February", "Dogtober", "March","April","May","June","July","August","September","October","November","December"];
  // * Example Input: "Jarch", 7
  // * Example Output: ["January","February", "March","April","May","June","July", "Jarch","August","September","October","November","December"];
 
  const newMonth = (month, placement) => {
    let monthsCopy = months.slice();
    monthsCopy.splice(placement, 0, month)
    return monthsCopy;
 }
 
 newMonth("Jacktober", 8); //output: adds Jacktober after August 

// Splice:
//    first arugment indicates where to start 
//    second argument says how many items to delete
//    last item indicates what will be added to first argument's index position



  // ! EXERCISE 9 !
  //! A
  // ? Create a function called longMonths() with no parameters
  // ? The function should `return` an array of months that have 7 or more characters
  // *Example Output: ['January','February','September','October','November','December']

  //Solution 1 - Filter
  const longMonths = () => {
    let longNames = months.filter(m => {
        return months.length >= 7; //does not need an if statement for the condition
        });
    return longNames;
    }

    //Solution 2 - forEach
  const longMonths2 = () => {
      let arr = []; //forEach only does; it does NOT output/return anything. So results must be stored somewhere before they can be returned. 
      months.forEach(m => {
          if (months.length >= 7){
              arr.push(m);
          }
      })
  }

// ! (B)
// ? Create a function called longWord has a parameter called `word`
// ? `word` will take a string that is 1 or more characters in length
// ? Your function should return `true` if the word is 7 characters or longer
// ? Otherwise it'll return `false`
// * Example Input: "Delicious"
// * Example Output: true

const longWord = word => {
    if (word.legnth >= 7){
        return true;
    } else {
    return false;
    }
}

  // ! EXERCISE 10 !
  // ? Create a function called yMonths() with no parameters
  // ? The function should `return` an array of months that end with the letter "y"
  // *Example Output: ['January','February', "May", "July"]

const yMonths = () => {
    let filtered = months.filter(m => {
        //if the last element is "y", return the element
        return m[m.length-1] === "y";
    })
}

// ! EXERCISE 11 !
// ? Create a function called abreviatedMonths() with no parameters
// ? The function should `return` a new array with only the first 3 letters of each month in uppercase

// * Example Output: ['JAN', 'FEB', 'MAR','APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP','OCT', 'NOV', 'DEC']

const abbreviateMonths = () => {
    return months.map(m => {
       return m.toUpperCase().slice(0, 3); //telling slice to start at index 0 and end at index 3, to grab the first 3 letters of each month
    })
}

// ! EXERCISE 12 !

// ? Create a function called everyMonth() with no parameters to log every month without a for loop

const everyMonth = () => {
    return months.map(m => {
        console.log (m);
    })
}