
const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

const $fetch = require('node-fetch')

app.use(express.static('public'))

//Base Route
app.get('/', (req, res) => {
    res.render("home.ejs")
})

//Results Route
app.get('/random', (req, res) => {
    let endpoint = 'https://www.boredapi.com/api/activity/'
     $fetch(endpoint) //make request to endpoint
    .then(response => {
        //console.log(response)
        return response.json();
    }) //if data is ok, parse JSON
    .then(data => {
        res.render('results.ejs', {data})//render resulst page and send the data to the page
    }) //do something with the data
    .catch() //if there's an error, catch em all #pokemon
})

//select by type route
app.get('/type', (req, res) => {
let endpoint = `http://www.boredapi.com/api/activity?type=${req.query.type}`
$fetch(endpoint)
  .then((response) => {
    return response.json()}
    )
  .then((data) => {
      console.log(data)
      res.render("results.ejs", {data})}
)
    .catch()
})


const port = process.env.port || 3003;
app.listen(port, () => {console.log(`App is runnin on ${port}!`)})