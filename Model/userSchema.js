// funriture signup

const mongodb=require('mongoose')
const structure=mongodb.Schema({
  fullName:String,
  contact:String,
  email:String,
  password:String
}) 

const data=mongodb.model("User",structure);
module.exports=data;

