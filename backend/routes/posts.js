const express = require("express");
const router = express.Router();
const Post = require('../model/post').default
const CheckAuth = require('../middleware/check-auth');


//console.log('user is goood2:  '+ require('../routes/user').getCounterz333);


router.post('',
//adding middle ware to check that a user is authenticated before they can create posts.
CheckAuth,
(req,res,next)=>
{var user = require('../routes/user').getuser;
var region = require('../routes/user').region;
var usertype = require('../routes/user').usertype;

const posts = new Post(


  {
region:region,
usertype:usertype,
userName:user,

Title: req.body.Title,
PlacedPost: req.body.PlacedPost
}
);
posts.save()
.then((createdPost)=>
{
  //console.log('user is goood11:  '+ require('../routes/user').getCounterz333);
console.log(createdPost);
res.status(201).json({
message: 'Post was successfully created',
orderID: createdPost._id
});
console.log(posts);
});
});
router.get('',(req,res,next)=>
{
Post.find().then((documents)=>{
res.json(
{
message: 'Posts retrieved from Server successfully',
posts:documents
});
});
});
router.delete("/:id",
//Check if user has valid token using middle ware we created.
CheckAuth,
(req,res,next)=>
{
console.log(req.params.id);
Post.deleteOne({_id: req.params.id})
.then((result)=>
{
//console.log(result);
console.log("Post Deleted from DB");
res.status(200).json({message: "Post Deleted from Database"});
});
});
module.exports = router;
