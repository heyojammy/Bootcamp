
const express = require('express');
const app = express(); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Root');
});

app.get('/animals', (req, res) => {
    res.render('animal')
})

app.get('/demo', (req, res) => {
    let animals = ['dog', 'cat', 'hippo']
    res.render('animal', {data: animals})
}); 

app.get('/demo2', (req, res) => {
    let animalobj = [
        {
          breed: 'dog', 
          name: 'Spike'
        },
        {
          breed: 'cat', 
          name: 'Mr Tabby'
        },
        {
          breed: 'bird', 
          name: 'Tweety'
        }
      ]
    res.render(('animal', {obj: animalobj})); 
}); 

app.get('*', (req, res) => {
    res.send('error')
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`app on port ${port}`)
})



