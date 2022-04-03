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