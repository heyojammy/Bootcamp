
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/jobs', (req, res) => {
    let data = [
        {name: 'Angela', occupation: 'software engineer', company: 'Facebook'},
        {name: 'Paul', occupation: 'web developer', company: 'Twitter'}, 
        {name: 'Matt', occupation: 'instructor', company: 'ACC'}, 
        {name: 'Louis', occupation: 'sales representative', company: 'Dell'}
    ];
    res.render("jobs", {data: data});
});


app.listen(3003, () => {
    console.log('App runnin on port 3003');
});