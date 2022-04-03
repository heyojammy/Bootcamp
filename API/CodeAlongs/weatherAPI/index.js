
const express = require('express'); 
const app = express(); 
const logger = require('morgan');
app.use(logger('dev')); 

// app.use(express.static('public'));

const $fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.redirect('/home'); //if the user types in the root route, it'll redirect to home
})

app.get('/home', (req, res) => {
    res.render('home.ejs'); 
})

//Making an HTTP request: 
//1. use/get endpoint
//2. if no error: 
        //parse data
        //send data to client
//3. if error, handle it
//4. use the parsed data

const baseURL = 'https://www.metaweather.com/api/location'

app.get('/results', (req, res) => {
    let route = '2487956/'
    let endpoint = `${baseURL}/${route}`; 
    $fetch(endpoint) //get endpoint
        .then(response => response.json()) //get response from server and parse it
        .then(data => {res.render('results.ejs', {data: data.consolidated_weather[0]})}) //parsed response becomes data you can manipulate
        .catch(error => console.log(error)) //if there's an error, handle it
    console.log(response);
})

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 