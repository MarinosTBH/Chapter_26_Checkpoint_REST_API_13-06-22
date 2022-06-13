//INSTRUCTION : Create a person
const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({

    //constructor

    name : {
        type: String,
        unique: true,
        required : true //validator required
    },
    age : {
        type: Number,
        min : 18,   // validation
        max : 99,   // validation
    },
    createdAt : {
        type : Date,
        immutable : true, // with immutable FLAG we canno't change this 
        default : ()=> Date.now(), //validator Default 
    }
});


module.exports = mongoose.model('User', userSchema) 