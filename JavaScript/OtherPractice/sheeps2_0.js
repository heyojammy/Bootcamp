

const subSheeps = numOfSheeps => {

    let string = "";
    let index = numOfSheeps;
    
    while (index > 0) {
    
    string += `${index} sheeps...`; //stores number of sheep in variable string BEFORE counting down, so this code will NOT print 0 sheeps
    index-- //counts down number of sheeps AFTER above string is stored in variable "string"
    
    }
    
    return string; //outputs ALL strings
    
    }
    
    subSheeps(10);