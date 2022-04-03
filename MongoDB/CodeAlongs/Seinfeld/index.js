
const express = require('express')
const app = express()

//Three steps when working with Mongoose: 
//  1. make a connection
    const mongoose = require('mongoose')
    const keys = require('./config/keys') //<--find keys file, run keys file, if in production mode do ___ OR if in development mode, do ____

    mongoose.connect(keys.mongoURI)
    .then(()=>console.log(`Hey, you are connected to ${db} database!!`))
    .catch(error=>console.log(`connection issues: ${error}`))

//  2. build blueprints
//      a. schema 
//          defines the data's key, the data's type, and its mode that's used in the model
//          the model CANNOT deviate from the set structure(Schema):

        let characterSchema = mongoose.Schema({
            name: String,
            age: Number, 
            email: String
        })

//      b. model

       let CharacterModel = mongoose.model('characters', characterSchema) //<--Model method MUST use 2 arguments: 1st collection name, 2nd name of Schema
        let Character = new CharacterModel({
            name: 'Jerry',
            age: 45,
            email: 'herpdederp@email.com'
        })

//  3. Write queries
//      a. read
//      b. create
//      c. update <--NOT used in this demo
//      d. delete <-- NOT used in this demo


//  CREATE
// .save is a mongoose method that creates/updates information
Character.save((err, characters) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(characters)
    }
}) 


const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 