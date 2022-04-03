
//must require data from model folder to be able to reference the model named "User"
const User = require('../models/appusersmodel')

const getUsers = (req, res) => {
    User.find({}) //find the User collection in the database
    .then(data => { //render message in the browser
        console.log(data)
        res.status(200).json({message: `User found: ${data}`})
        res.send(`User Found`)
    })
    .catch(err => { 
        //if there's an error, console log it. 
    console.log(err)
    res.status(500).json({message: `There's a problem with da server!`})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
})
}


const saveUser = (req, res) => {
    const nancy = new User({
        username: 'Nancy',
        age: 22,
        hobby: 'knitting'
    }) //User here is the model name that is declared in appusersmodel.js
    nancy.save()
    .then(data => {
        res.status(201).json({message: `Saved New User`})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: `There's a problem!`})
    })
}

module.exports = {
    getUsers: getUsers,
    saveUser: saveUser
}