
//import models/catmodel bc the functions are editing the models
const Cat = require('../models/catmodel')


//functions that pull data from the database to be used & tells the computer WHAT to do with it
const getCats = (req, res) => {
    Cat.find({}) //find the Cat collection in the database
    .then(cats => { //render message in the browser
        console.log(cats)
        res.status(200).json({message: 'You have cats!', cats: cats})
        res.send(`You've got lots and lots of cats!`)
    })
    .catch(err => { 
        //if there's an error, console log it. 
    console.log(err)
    res.status(500).json({message: `There's a problem with da server!`})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
})
}

const getCat = (req, res) => {
    let id = req.params.id
    Cat.findById({id}) //finds the cat with the specified ID number in the Cat collection in the database
    .then(cat => { //render message in the browser
        console.log(cat)
        res.status(200).json({message: `You got a cat with id of ${id}!`, cat: cat})
        res.send(`You've got lots and lots of cats!`)
    })
    .catch(err => { //if there's an error, console log it. 
        console.log(err)
        res.status(500).json({message: `There's a problem!`})
    })
}

const createCat = (req, res) => {
    const newCat = new Cat(req.body)
    newCat
    .save()
    .then(cat => {
        res.status(201).json({message: `You got a cat with id of ${id}!`, cat: cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: `There's a problem!`})
    })
}

const deleteCat = (req, res) => {
    let id = req.params.id
    Cat.findByIdAndDelete(id)
    .then(cat => {
        res.status(200).json({message: `You deleted cat ${id}`})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: `There's a problem!`})
})
}

module.exports = {
    getCats: getCats, //use object key/value pair when wanting to send multiple things
    getCat: getCat, 
    createCat: createCat,
    deleteCat: deleteCat
}