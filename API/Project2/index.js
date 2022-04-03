
const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const logger = require('morgan');
app.use(logger('dev')); 

app.use(express.static('public'));

const key = require('./config/keys');

app.get ('/', (req, res) => {
  res.redirect('/home'); 
})

app.get ('/home', (req, res) => {
  res.render('home.ejs'); 
})

app.get ('/movies', (req, res) => {
  let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key.tmbd_key}&language=en-US&page=1`
  console.log('endpoint', key.tmbd_key);
  $fetch(endpoint)
  .then(response => {
    console.log('response', response)
    return response.json()
  })
  .then(data => {
    console.log(data)
    let movies = data.results; 
    res.render('movies.ejs', {data: movies}); 
  })
  .catch(error => res.render("Woopsie"));
})

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 