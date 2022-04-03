/*Complete the square sum function so that it squares 
each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

// 1^2 2^2 2^2 <--square is multiplying the number by itself

// 1*1  2*2  2*2 

// 1     4     4 

// 1 + 4 + 4 = 9

//Solution one
const sqrSum = array => {
    let sum = 0;
    array.forEach(el => {sum = sum + el * el}); 
    return sum;
}

sqrSum([1,2,3]); //output 14;

//Solution 2 using .reduce(); 
const sqrSum2 = array => {
    return array.reduce((sum, el){return sum + el * el});
}

sqrSum2([1, 2, 3]) //output 14;
