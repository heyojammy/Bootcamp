
const express = require('express')
const router = express.Router()

//import all the functions needed
const {getCats, getCat, createCat, deleteCat} = require('../controllers/catcontrollers')

//express.router - router method required in order to use the routes in another file

//route name, then function name
router.get('/', getCat)
router.get("/:id", getCat)

router.get('/', getCats)

router.post('/', createCat)

//Dynamic Route for Cats

router.get('/cats/:id', (req, res) => {
    let id = req.params.id //declaring a dynamic route 
    res.send(`You've got ${id}!`)
})

module.exports = router

