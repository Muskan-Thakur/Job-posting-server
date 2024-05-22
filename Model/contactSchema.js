// JOB contact us

const mongodb=require('mongoose')
const contact=mongodb.Schema({
  name:String,
  email:String,
  subject:String,
  msg:String
}) 

const data=mongodb.model("feedback",contact);
module.exports=data;

