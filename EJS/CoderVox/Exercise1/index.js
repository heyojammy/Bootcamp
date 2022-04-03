const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home", {pastry: 'doughnutties'});
});

app.get('/about/:food', (req, res) => {
    let food = req.params.food;
    res.render("about", {food: food});
});

app.listen(3000, () => {
    console.log('App runnin on port 3000');
});