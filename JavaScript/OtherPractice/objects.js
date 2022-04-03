

//Create an object of a penguin with a few properites.

let penguin = {
    name: "Squeaker",
    beak: "yellow",
    wings: 2,
    belly: "white"
  };


//Print the penguins name & a intro message to the console. 
console.log(`Hi, my name is ${penguin.name}!`); //Hi, my name is Squeaker!

//Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

penguin.fly = false;

/*Updated object: 
{ name: 'Squeaker',
  beak: 'yellow',
  wings: 2,
  fly: false,
  belly: 'white' }*/


//Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
penguin.chirp = () => {console.log("Chippy Dippy Wat do the Panguan say")};

//Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
penguin.sayHello = () => {console.log("Howdy Doody")};

//Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
penguin.sayHello(); //Howdy Doody

//Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
penguin.name = "Penguin McPenguinButt"

//Write another method called canFly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's fly property is true, or "No flying for me!" if its false.
penguin.canFly = () => {if (penguin.fly === true) {console.log("I can fly!")} else {console.log("Woops, no flying for me dawg")}};

//Call your penguin's fly() method and make sure it works!
penguin.canFly(); //Woops, no flying for me dawg

//Change the fly property to true -- again, without modifying any of your previous code!
penguin.fly = true;

/*Updated object: 
{ name: 'Penguin McPenguinButt',
  beak: 'yellow',
  wings: 2,
  belly: 'white',
  fly: true,
  chirp: [Function],
  sayHello: [Function],
  canFly: [Function] }*/

//call your penguin's canFly() method again and make sure it works as expected!
penguin.canFly(); //I can fly!

//Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)


//Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)