

const express = require('express');
const app = express();
const request = require('request');

const logger = require('morgan');
app.use(logger('dev')); 

app.use(express.static('public'));

let image = "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_9378.jpg"; 

app.get ('/', (req, res) => {
  res.render('home.ejs', {image}); 
})


//if http request: 
//identify endpoint
//if there is no error, retrieve data
//if there is an error, handle it
//parse JSON or data

const baseUrl = "https://dog.ceo/ap"
const route = "breeds/image/random"

app.get('/getImage', (req, res)=>{
  let endpoint = `${baseUrl}/${route}`
  request(endpoint, (error, response, body)=>{
    if(!error && response.statusCode == 200){
      let parsedData = JSON.parse(body)
      res.render('index.ejs', {image: parsedData.message})
    } else {
      res.render('error.ejs', {error: "Something doggone funny happened"})
    }
  })
})

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 