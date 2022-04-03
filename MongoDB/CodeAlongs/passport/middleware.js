
const express = require('express')
const app = express()

const dog = (req, res, next) => {
  req.propValue =  "doggy"
  console.log(req.propValue)
  next()
}

const horse = (req, res, next) => {
  req.propValue +=  "horse"
  console.log(req.propValue)
  next()
}

app.get('/', dog, horse, (req, res)=> {
  res.send(`<h1>My value is: ${req.propValue}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Middleware app running`))