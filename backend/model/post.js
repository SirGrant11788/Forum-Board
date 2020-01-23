const mongoose = require('mongoose');
const postSchema = mongoose.Schema(
{
region: {type: String , required:true},
usertype: {type: String , required:true},
userName: {type: String , required:true},
Title:{type: String , required:true},
PlacedPost:{type: String , required:true}
}
);
module.exports =mongoose.model('Post', postSchema);
