
const express = require('express');
const app = express();

const needle = require('needle');

// needle.get('http://www.google.com', function(error, response) {
//   if (!error && response.statusCode == 200)
//     console.log(response.body);
// });

needle.get('https://jsonplaceholder.typicode.com/users', function(error, response) {
  if (!error && response.statusCode == 200)
    console.log(response.body[0].name);
    console.log(response.body[0].email);
    console.log(response.body[0].address); 
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 