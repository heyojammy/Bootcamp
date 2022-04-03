const countSHAWPS = num => {
    let string = "";
    
    let index = 0;
    //(will change to 1, 2, 3, 4 with each iteration)
    
    while (index < num) {
        index++;  //counts up by one to track number of sheeps and sets condition to eventually make loop FALSOOOOOOOOOOO
        string += `${index} sheeps...`; //
        }
        return string; //
    }

   countSHAWPS(5); //output: 1 sheeps, 2 sheeps, 3 sheeps, 4 sheeps, 5 sheeps