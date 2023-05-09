const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userPic:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('ProfilPic', userSchema);