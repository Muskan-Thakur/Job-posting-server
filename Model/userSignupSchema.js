// OnlinJob signup

const mongodb=require('mongoose')
const signStructure=mongodb.Schema({
  name:String,
  username:String,
  email:String,
  password:String,
  otp:String,
  isVerified:Boolean,
}) 

const data=mongodb.model("SignLoginDb",signStructure);
module.exports=data;

