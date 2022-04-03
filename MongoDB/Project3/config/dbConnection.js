
//imports dotenv dependency 
//Config will parse the contents, assign it to process.env, 
// and return an object with a parsed key containing the loaded content or an error key if it failed
require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('MongoDB connected!'))
        .catch(err => {
            console.log(`Error connecting with DB: ${err}`)
    })
}

module.exports = connectDB
