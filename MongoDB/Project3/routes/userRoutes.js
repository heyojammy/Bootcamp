
const express = require('express')
const {getUsers, saveUser} = require('../controllers/userControllers')
const router = express.Router()

router.get('/', getUsers)
router.post('/save', saveUser)

module.exports = router