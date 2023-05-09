const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    userPic:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('User', userSchema);