//Set up server
const express = require("express");
const app = express();

//Using the Morgan dependency to log server info:
//in terminal: npm i morgan --save-dev //creates a key called devDependencies in your package.json file

const logger = require("morgan"); //calls the morgan devDependencies value from your package.json file
app.use(logger("dev")); //displays GET / 304 13.628ms.
//Get is the request type. / is the root route. 304 is the status code. and ms is how long it took to process the request

app.get("/groot", (req, res) => {
  res.send("Am grut");
});

//build route that takes 2 numbers
//send back the result of those numbers multiplied together

app.get("/multiply/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;
  res.send(`${num1 * num2}`);
});

app.get("/add/:numOne/:numTwo", (req, res) => {
  let { numOne, numTwo } = req.params;
  if (numOne > numTwo) {
    res.send(`${numOne * numTwo}`);
  } else {
    res.send(`${parseInt(numOne) + parseInt(numTwo)}`);
  }
});

//Listener
//Using Chalk dependency to change color of text in the terminal
//in terminal: npm i chalk --save-dev //creates a key called chalk in your package.json file

const chalk = require("chalk");
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(chalk.cyanBright(`App on port ${port}`))); //syntax: chalk.colorname('display text')
