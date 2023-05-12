var express = require('express');
var router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')


con = require('../controllers/pageController');

/* GET home page. */
router.post('/login', async function(req, res, next) {
  let findUser = {
    username: req.body.username,
    password: req.body.password
  }
  const compare = await User.findOne({username: findUser.username})
  if(compare !== null){
    const validate = await bcrypt.compare(findUser.password, compare.password)
    if (validate){
      res.redirect('http://localhost:5500/game/gameselcect.html')
    } else {
      res.render('http://localhost:5500/game/login.html', {user:findUser, errorMessage:"wrong password or username"})
    }
  }


  
});
router.post('/register', function(req, res, next) {
  try{
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      userpic: req.body.userpic
    })
    console.log(user)
    User.create(user)
    res.redirect('http://localhost:5500/game/login.html')
  } catch (err){
    res.status(400).json(err.message)
  }
});
router.get('/authentication', async function(req, res, next) {
  res.redirect("http://localhost:5500/game/index.html")
});
router.get('/logout', async function(req, res, next) {
  res.clearCookie("token");
  res.redirect("http://localhost:5500/game/index.html")
});
router.get('/profilePics', con.getpics, function(req,res, next){
    res.json({ pics: res.locals.profilepics})
})
router.get('/profilePics/:profilepics', con.getspesificPic, function(req,res, next){
  res.json({ imgurl: res.locals.profilepics})
})
router.get('/userinfo/:userinfo',  function(req,res,next){
})
module.exports = router;
