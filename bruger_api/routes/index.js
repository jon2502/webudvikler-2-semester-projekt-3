var express = require('express');
var router = express.Router();
var APIUser = require('../models/user')
var APIprofilPics = require('../models/user')

/* GET home page. */
router.post('/login', async function(req, res, next) {

});
router.post('/register', async function(req, res, next) {
  let errmsg = 'error in username or password'
  try{
    const user = new user({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      userPic: req.body.userPic
    })
    await APIUser.create(user);
  } catch (err){
    res.status(400).json(err.message)
  }
});
router.post('/authentication', async function(req, res, next) {

});
router.post('/logout', async function(req, res, next) {
  res.clearCookie("token");
});
router.get('/profilePics', async function(req,res, next){
  let pics = await APIprofilPics.find();
  res.locals.profilePics = pics;
})

module.exports = router;
