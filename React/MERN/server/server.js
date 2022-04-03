const animals = require('animals');
const cors = require('cors'); //<--middleware
const express = require('express');
const app = express(); 

const mongoose = require('mongoose')
const keys = require('./config/keys') //<--find keys file, run keys file, if in production mode do ___ OR if in development mode, do ____

mongoose.connect(keys.mongoURI)
.then(()=>console.log(`Hey, you are connected to ${keys.db} database!!`))
.catch(error=>console.log(`connection issues: ${error}`))

let mernSchema = new mongoose.Schema({
  fname: {
    type: String 
  },
  lname: {
    type: String
  }
})

let MernModel = mongoose.model('MERN', mernSchema)

app.use(cors()) //<-- app.use "on every request, do _____" in this code, handle incoming requests via cors module

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.post ('/new', (req, res) => {
  console.log('Back end posted!', req.body)
  MernModel.create({
    ...req.body }, 
    function(error, result){
      let message = error ? error : result;
      res.json(JSON.stringify(message));
  });
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`app on port ${port}`)
})