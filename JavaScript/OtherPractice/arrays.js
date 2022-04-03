

7. Create an array named colors that contains five different names of colors as strings.
    let colors = ['lavender', 'green', 'blue', 'peach', 'violet']; 

8. Access the first color in the array and print it to the console 
    console.log(colors[0]); //lavender is the first item


9. Now do the same with the third color in the list.
    console.log(colors[2]); //blue is the 3rd item

10. Write one line of code that changes the value of the last color in the list to "ultraviolet"
    colors[4] = "ultraviolet"; 

11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
    let fourthColor = colors[3]; //prints peach

12. Add another color to the end of the list.
    colors.push("ice blue"); //adds ice blue to the end of the array

13. Add another color to the beginning of the list.
    colors.unshift("white"); //adds white to the beginning of the array

14. Print the length of the array to the console 
    console.log(colors.length); 

15. Remove the last color from the end of list, and then print the length of the array to the console
    colors.pop(colors[6]); 
    console.log(colors.length); 

16. Write a for loop to iterate through every color in the array and print each color's value to the console.
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++){
        console.log(colors[colorIndex]);
    }

17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.

18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)















