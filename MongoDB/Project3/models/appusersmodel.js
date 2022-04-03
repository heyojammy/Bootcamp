
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    age: Number, 
    hobby: String
})

//arg 1: name of the collection - if it doesn't already exist, Mongo will create it
// arg 2: name of your Schema for the model/document
const User = mongoose.model('User', userSchema)


//store model instances inside a variable. To assign multple to one variable, put inside an array. 
let appUsers = new User({
        username: 'Nancy',
        age: 22,
        hobby: 'knitting'
    })

    // new UserModel({
    //     username: 'Tommy', 
    //     age: 30,
    //     hobby: 'Surfing'
    // })

//Users in this instance is referring to the above declared "users" array
appUsers.save((error, savedUser) => {
    if(error){
        console.log(`Error saving document to database: ${error}`)
    } else { 
        console.log(`Saved document: ${savedUser}`)
    }
})


module.exports = User