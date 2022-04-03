

const express = require('express'); 
const app = express(); 
const logger = require('morgan');
app.use(logger('dev')); 

app.use(express.static('public'));

const request = require('request'); 

const key = require('./config/keys');

app.get('/', (req, res) => {
    res.render('home.ejs'); 
})

let baseUrl = "https://api.themoviedb.org/3"

app.get('/getMovies', (req, res) => {
    let route = `search/movie?api_key=${key.tmbd_key}&query=${req.query.kittens}&language=en-US&page=1&include_adult=false`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint, (error, response, body) => {
        let parsedData = JSON.parse(body); 
        res.render('results.ejs', {data: parsedData.results})
    })
})



const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 