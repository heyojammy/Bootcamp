
//Set up server
const express = require('express');
const app = express(); 

//Build a route handler that prints a string to the browser
app.get('/', (req, res) => {
    res.send("Capibaras in yuzu onsen baths are cute af boi");
});

//build 3 more route handlers:
//  /fruits - I like nanoos
//  /animals - Cats are da bomb diggity
// /camping - I'm granola af gurl

app.get('/fruits', (req, res) => {
    res.send("I like nanoos");
});

app.get('/animals', (req, res) => {
    res.send("Cats are da bomb diggity");
});

app.get('/camping', (req, res) => {
    res.send("I'm granola af gurl"); 
});

//Create a dynamic route handler
app.get('/:something', (req, res) => { //The colon declares a variable within the URL. In thise case, the variable name is "something"
    console.log(req.params.something); //since req & res are objects, you must follow object dot/bracket notation rules to access your variable
}); 

app.get('/shelter/:catName/breed/age/:family', (req, res) => { 
    let string = `Hello, ${req.params.catName}, you're being adopted by the ${req.params.family} family.` 
    res.send(string);

    //let {catName, family} = req.params; //allows you to just write ${catName} and ${family} in the template literal because it reassigns the values of the req object. This is called destructuring.
}); 

//Listener
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`App on port ${port}`)); 