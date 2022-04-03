
// Import Express to host data
const express = require('express')
const app = express()

//Import mongoose to connect to DB
const mongoose = require('mongoose')
//Place mongoose connection in a separate file - require the directory path in index.js
const connectDB = require('./config/dbConnection')
//Put mongoose connection in a function so it can be imported to index.js
connectDB()

//built in parser
app.use(express.json());

//require imports the data into the file but cannot be used
//must use .use() method to use any imported data
const userRoutes = require('./routes/userRoutes')

//1st argument: When to use the 2nd argument
//2nd argument: What you want to be used
app.use('/', userRoutes)
//userRoute app handler is only activated when user accesses the / route

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Port running on ${port}`));
