const weekDay = num => {
    if (num === 0){
        return "Sunday";
    } else if (num === 1){
        return "Monday";
    } else if (num === 2){
        return "Tuesday";
    } else if (num === 3){
        return "Wednesday";
    } else if (num === 4){
        return "Thursday";
    } else if (num === 5){
        return "Friday";
    } else if (num === 6){
        return "Saturday";
    }
}

const weekDay = num => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    return days[num]; 
}


const returnLastValue = arr => {
    let arrCopy = arr; 
    return arrCopy[]];
}

console.log(returnLastValue([1,1,4,7,9]))


var arr = [2, 3, 4]; 

arr.unshift(0, 1);
arr.push(5, 6, 7);

console.log(arr); //output [0, 1, 2, 3, 4, 5, 6, 7]

const withoutFirst = arr => {
    return arr.slice(1);
}

console.log(withoutFirst([1, 2, 3])); //output [2, 3]

const checkLength = (str1, str2) => {
    if (str1.length > str2.length) {
        return "First is longer"
    } else if (str2.length > str1.length) {
        return "Second is longer!!!";
    } else {
        return "They be equal, hun"; 
    }
}

console.log(checkLength("man", "money")); 


let food = ["onion rings", "fries", "burgers", "chili", "hot dog"]; 

const theLastOfUs = arr => {
    let sacrifice = arr.slice(0, arr.length-1);
    return sacrifice;
}

console.log(theLastOfUs(food));