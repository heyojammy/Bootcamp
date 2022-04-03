
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:stuff', (req, res) => {
    let stuff = req.params.stuff
    res.render("about", {stuff: stuff});
});


app.listen(3003, () => {
    console.log('App runnin on port 3003');
});