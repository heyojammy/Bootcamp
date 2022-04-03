

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Heyyyyyyy gorl');
});

app.get('/cat', function(req, res){
    res.send(`I love cats. I love every kind of cat. I just want to hug them all, but I can't. can't hug every cat.`)
})

app.get('*', (req, res) => {
    res.send(`Get ALLLL the routes`);
})


const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 