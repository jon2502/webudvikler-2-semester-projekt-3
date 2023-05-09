const mongoose = require("mongoose");
var APIprofilePics = require('../models/profilePic.js')

module.exports = {
    getpics: async function (req, res, next) {
        try{
            let pics = await APIprofilePics.find();
            res.locals.profilepics = pics;
            next()
        }catch (error) {
            res.status(400).json(error.message);
            }

}
}