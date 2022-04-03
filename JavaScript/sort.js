



var numbers = [1, 10, 4, 9999, 10, 50, 5]
var numberStrings = ['1', '10', '4', '9999', '10', '50', '5']
var pets = ['Moxxie', 'Pickle', 'Hootchie']
​

//     Your task is to sort these as follows progressively more difficult exercises:
​
//     1. sort numbers ascending, using .sort() and .sort(comparator) methods
            numbers.sort((a,b) => a-b); //solution one output [ 1, 4, 5, 10, 10, 50, 9999 ]
            numbers.sort((a,b) => {return a-b}); //solution two output [ 1, 4, 5, 10, 10, 50, 9999 ]

//     2. sort numbers descending and observe what happened (note you cannot use the first method)
            numbers.sort((a,b) => {return b-a});
//     3. sort numberStrings ascending and observe
            
//     4. sort numberStrings descending and observe

//     5. sort pets without a function i.e. pets.sort()

//     6. sort pets with a comparator function

//     7. sort pets based on the length of the strings
​
​
// Note: we shall do this with embedded arrays and objects later after we have made more progress