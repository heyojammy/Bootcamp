const express = require("express");
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
//fetch is what we will use to make our HTTP request

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
  fetch(endpoint) //Gets the bitcoin JSON file
    .then(response => response.json())
    .then(data => {
      console.log('data');
      let {symbol, rate_float} = data.bpi[req.query.currency] //req.query connects to form and currency links it to the form name/value
      //declaring two variables

      res.render("index.ejs", {currencySymbol: symbol , cost: rate_float }); 
      //res.render syntax: 1st argument is the file name, 2nd argument is the object we want to display/stuff sending to the home page. Second argumet is placed in <%= %> brackets in EJS page. 
    })
    .catch((error) => {
      console.log(error);
      res.send("Oh no, there's a problemo");
    });
});

app.get("/price", (req, res) => {
  let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
  fetch(endpoint) //Gets the bitcoin JSON file
    .then((response) => response.json())
    .then((data) => {
      let {symbol, rate_float} = data.bpi[req.query.currency]
      //declaring two variables

      res.render("index.ejs", {currencySymbol: symbol, cost: rate_float})
      //res.render syntax: 1st argument is the file name, 2nd argument is the object we want to display
    })
    .catch((error) => {
      console.log(error);
      res.send("Oh no, there's a problemo");
    });
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`));