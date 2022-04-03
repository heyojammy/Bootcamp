
//Foundation
const express = require('express');
const app = express();

//Route Handler 1
app.get('/', function(req, res){
    res.send('Heyo heyo heyo heyo');
});

//Route Handler 2
app.get('/about', function(req, res){
    res.send('Howdy Doody'); 
});

//Route Handler 3
app.get('/Contact', function(req, res){
    res.send('call us maybe')
});

//Route Handler 4 => Pulls a FILE and pushes it to the browser
// app.get('/Rando', function(req, res){
//     res.sendFile('__Express + "/myApp.html')
// });

//Nodemon Route Handler
app.get('/NodeMon', function(req, res){
    res.send('yo I autoupdate')
});

//Route Handler using variables in URL
app.get('/v3/users/:username/:userid', function(req, res){
    console.log(req.params);
    res.send(`Welcome to your page  ${req.params.username}!`)
});

//Listener Option 1
//const port = 3003; 
//app.listen(port, () => console.log(`App is running on port ${port}`)); 

//Listener Option 2
app.listen(3003);

//Listener w/dynamic port finder
//const port = 3003; 
//app.listen(port, () => console.log(`App is running on port ${port}`)); 
