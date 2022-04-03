/*Convert a number to a reversed array of digits. 
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example: 348597 => [7,9,5,8,4,3]*/

const reverseNum = num => {
    let numStr = num.toString().split("").reverse();
    let numArr = numStr.map(n => parseInt(n));
    return numArr;
}

reverseNum(12345); //output [5,4,3,2,1]

const reverseArr = arr => {
    return arr.reverse();
}

console.log(reverseArr([1, 2, 3, 4, 5]))