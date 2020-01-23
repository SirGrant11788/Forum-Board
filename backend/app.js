const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
server: { sslCA: cert }};
const app = express();
mongoose.connect("mongodb+srv://admin:rx0x1biHtjcpZrDW@cluster0-8d57j.mongodb.net/test?retryWrites=true")
.then(()=>
{
console.log("connected to DB successfully ! YAY")
})
.catch(()=>
{
console.log('Apparently not !!!')
},options);
app.use(bodyParser.json())
app.use((reg,res,next)=>
{
res.setHeader("Access-Control-Allow-Origin", '*');
res.setHeader("Access-Control-Allow-Headers",
"Origin ,X-Requested-With,Content-Type,Accept,Authorization"
);
res.setHeader("Access-Control-Allow-Methods",
"*");
next();
});
app.use("/api/posts",postRoutes)
app.use("/api/user",userRoutes)
module.exports = app;
