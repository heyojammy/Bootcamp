
const express = require('express');
const app = express();

const needle = require('needle');

needle.get('https://type.fit/api/quotes', function(error, response) {
  if (!error && response.statusCode == 200) {
    let quotes = JSON.parse(response.body); 
    console.log(quotes[3].text);
}});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 