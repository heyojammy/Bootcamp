/*Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers.*/

const filterInteger = (num) => {
    if (num % 2 === 0) {
        return "EVENちゃんやで"
    } else {
        return "ODDちゃんやで"
    }
}

filterInteger(2);  //output EVENちゃんやで
filterInteger(25); //output ODDちゃんやで 
filterInteger(30); //output EVENちゃんやで
filterInteger(234); //output EVENちゃんやで
filterInteger(589); //output ODDちゃんやで