
const express = require('express')
const app = express()

//Three steps when working with Mongoose: 
//  1. make a connection
    const mongoose = require('mongoose')
    const keys = require('./config/keys') //<--find keys file, run keys file, if in production mode do ___ OR if in development mode, do ____

    mongoose.connect(keys.mongoURI)
    .then(()=>console.log(`Hey, you are connected to ${keys.db} database!!`))
    .catch(error=>console.log(`connection issues: ${error}`))

//  2. build blueprints
//      a. schema 
//          defines the data's key, the data's type, and its mode that's used in the model
//          the model CANNOT deviate from the set structure(Schema):

let characterSchema = mongoose.Schema({
    alias: {
        type: String,
        required: [true, 'Must have an alias'] //<--making it required but also including error message if user doesn't include alias

    },
    fname: String, 
    lname: String,
    nemesis: String, 
    hero: {
        type: Boolean,
        default: true //<-- Mongo auto assigns the charas hero status as TRUE so we don't have to enter it
    }, 
    alive: {
        type: Boolean, 
        default: true
    },
    created: {
        type: Date, //<--Date is a datatype in Mongo
        default: Date.now() //<-- vanilla JS method enters current date as timestamp
    }
})

//      b. model
        //1st arg: collection name
        //2nd arg: Schema name

let CharacterModel = mongoose.model('heros', characterSchema)

let hero = new CharacterModel({
    alias: 'Spider-man', 
    fname: 'Peter', 
    lname: 'Parker', 
    nemesis: 'Green Goblin'})


hero.save((error, character) => {
    if(error){
        console.log(`Error saving document to database: ${error}`)
    } else { 
        console.log(`Saved document: ${character}`)
    }
})

let villain = new CharacterModel({
    alias: 'Green Goblin', 
    fname: 'Norman', 
    lname: 'Osborn', 
    nemesis: 'Spider-Man'})


villain.save((error, character) => {
    if(error){
        console.log(`Error saving document to database: ${error}`)
    } else { 
        console.log(`Saved document: ${character}`)
    }
})

//  3. Write queries
//      a. read
//      b. create
//      c. update <--NOT used in this demo
//      d. delete <-- NOT used in this demo




const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 