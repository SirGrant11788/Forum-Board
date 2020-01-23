


const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../model/user')
const ExpressBrute = require('express-brute');
const store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
const bruteforce = new ExpressBrute(store);
//const bruteforce = new ExpressBrute(store);

router.post("/signup", (req, res, next) => {
bcrypt.hash(req.body.password,10)
.then(hash => {
const user = new User({
region:req.body.region,
usertype:req.body.usertype,
username:req.body.username,
email: req.body.email,
password: hash
});
console.log(req.body.password, req.body.email, req.body.username);


user .save()
.then(result => {
res.status(201).json({
message: "User created!",
result: result


});
console.log("User id is:  "+ result._id)

})
.catch(err => {
res.status(500).json({
error: err
});
});
});
});
router.post("/login",
bruteforce.prevent,
(req,res,next)=> {
// creating global user variable to use in different code blocks.
 let fetchedUser;



//checks if we have user with a valid e-mail address
User.findOne({email:req.body.email})
.then(user=>{
console.log(user);
if(!user)
{
return res.status(401).json(
{
message: "Authentication Failed, try again "
});
}
// assigning retrieved user to global variable so we can use him later
fetchedUser= user;

//compares hashed passwords (alwasy the same hash with same input)
return bcrypt.compare(req.body.password,user.password)// compare returned user password and password in db
})
.then(result=>{
console.log("2",result);
if(!result)
{
return res.status(401).json(
{
message: "Authentication Failure eish "
});
}
//create JWT if user exists : JWT contains user e mail and user ID from user object
const token = jwt.sign({email:fetchedUser.email,userId:fetchedUser._id}, 'secret_this_should_be_longer_time_is',
{
expiresIn:'1h'
});
console.log("Logied in user ID: "+fetchedUser._id)
var1 = fetchedUser.username;
//export var var1;
module.exports = {
  getuser: fetchedUser.username,
  region: fetchedUser.region,
  usertype: fetchedUser.usertype
 };
//  module.exports = {
//   region: fetchedUser.region
//  };
//  module.exports = {
//   usertype: fetchedUser.usertype
//  };


console.log(token);
console.log("Log test")


res.status(200).json(
{
token:token
});
})
.catch(err =>{
console.log(err);
return res.status(401).json({
message:"Authentication Failure"


});
})
});




module.exports= router;

