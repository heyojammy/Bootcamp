
const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.json());
const connectDB = require('./config/dbConnection')

connectDB()

//require imports the data into the file but cannot be used
//must use .use() method to use any imported data
const catRoutes = require('./routes/catRoutes')

//1st argument: When to use the 2nd argument
//2nd argument: What you want to be used
app.use('/cats', catRoutes)
//catRoutes app handler is only activated when user accesses /cats route

app.get("*", (req, res) => {
  res.json({ message: "That route doesn't exist" });
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Port running on ${port}`));