
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema); 
//module.exports makes data in this file visible to other files in other folders - have to use "require" to import them tho
//arg 1: name of collection
// arg 2: name of schema