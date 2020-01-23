const jwt = require('jsonwebtoken');
//function executed on incoming request.
module.exports=(req,res,next)=>
{
try{
const token = req.headers.authorization.split(" ")[1];
jwt.verify(token,"secret_this_should_be_longer_time_is")
console.log("token Verified successfully");
next();
}
catch(error)
{

res.status(401).json({
message:"No user signed in, please sign in to continue"
});
}
};
