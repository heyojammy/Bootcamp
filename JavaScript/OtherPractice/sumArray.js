let total = 0;
​
const addNums = arr => {
  for (let i = 0; i < arr.length; i++){
   total += arr[i];
  }
  return total;
}
​
addNums([1, 2, 3, 4]); //output 10