
const express = require('express');
const app = express(); 

const logger = require("morgan"); 
app.use(logger("dev"));

app.use.express.static('public'); //gives access for index file to access the public folder 

app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/about', (req, res) => {
    res.render('about.ejs');
})

app.get('/about/:hobby', (req, res) => {
    let {hobby} = req.params;
    res.render('hobbies.ejs', {hobby: hobby}) //if the key has the same name as your variable, you can shorthand it to just "hobby" 
})

let pets = ['alligator', 'cat', 'bat', 'spider']; 

app.get('/animals', (req, res) => {
    res.render('animals.ejs', {doggyHorse: pets});
})

//res.send
//res.end
//res.render() <--new!! 

const chalk = require("chalk");
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(chalk.cyanBright(`App on port ${port}`))); //syntax: chalk.colorname('display text')

