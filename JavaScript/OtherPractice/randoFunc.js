

let array = [1, 2];

const changeArray = (func, arr) => {

    let newArr = [];
    let index = 0;
    while (index < arr.length){
        newArr.push(func(arr[index]));
        index++; 
    }
    return newArr;
}

const squareNum = numToSquare => {
    return numToSquare * numToSquare;
}

changeArray(squareNum, array);