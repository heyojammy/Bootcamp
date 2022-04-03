
//Set up express server
const express = require('express')
const app = express()

//Connect to Mongoose and database
//1. require mongoose
const mongoose = require('mongoose')

//2. Import keys folder that has mongo URL in it
const keys = require('./config/keys')

//3. Establish connection
mongoose.connect(keys.mongoURI)
.then(()=>console.log(`Hey, you are connected to ${keys.db} database!!`))
.catch(error=>console.log(`connection issue: ${error}`))

//Import  Model/Data
const User = require('./model/User')

const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Import express-session npm package 
app.use(require('express-session')({
    secret: "Blah blah blah",  // used to encrypt the user info before saving to db
    resave: false,             // save the session obj even if not changed
    saveUninitialized: false   // save the session obj even if not initialized
  }));
  
  app.use(passport.initialize()); //activates the authenticaion module (in this case Passport)
    app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());

 const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
  }

//Routes
app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/newsfeed', (req, res) => {
    res.render('newsfeed.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), (req, res)=>{
		// We don’t need anything in our callback function
		
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post("/signup", (req, res) =>{
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/newsfeed");
            });
        }
    })
  });

  app.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
  });

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`app is running on port ${port}`)); 