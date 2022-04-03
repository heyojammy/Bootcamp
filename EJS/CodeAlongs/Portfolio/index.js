
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('home')
});

app.get('/home', (req, res) => {
    const {testData} = require("./fakeData")
    res.render('home', {data: testData})
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});


const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`App on port ${port}`));