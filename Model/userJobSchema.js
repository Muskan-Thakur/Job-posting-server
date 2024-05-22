//Post a Job structure

const mongodb=require('mongoose')
const structure=mongodb.Schema({
    jobTitle:String,
    jobDescription:String,
    companyName:String,
    companyLogo:String,
    companyWebsite:String,
    companyDescription:String,
    jobType:String,
    location:String,
    salaryRange:String,
    applicationDeadline:String,
    contactEmail:String,
    skills:String,
    applicationInstructions:String 
}) 

const data=mongodb.model("Job",structure);
module.exports=data;

