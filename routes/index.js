var express = require('express');
var router = express.Router();
const Usermodel = require ('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post( "/Create", async(req,res,next)=>{

  const newuser = await Usermodel.create({
  
  username: req.body.username,
  password: req.body.password,
  
  })
  console.log(newuser)
    res.send("User Created")
  })
  

module.exports = router;
