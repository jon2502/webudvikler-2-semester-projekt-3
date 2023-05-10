var express = require('express');
var router = express.Router();


con = require('../controllers/pageController');

/* GET home page. */
router.post('/login', async function(req, res, next) {

});
router.post('/register', async function(req, res, next) {
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
router.get('/profilePics', con.getpics, function(req,res, next){
    res.json({ pics: res.locals.profilepics})
})
router.get('/profilePics/:profilepics', con.getspesificPic, function(req,res, next){
  res.json({ imgurl: res.locals.profilepics})
})
module.exports = router;
