const mongoose=require('mongoose');
const applySchema=mongoose.Schema({
    companyName:String,
    jobTitle:String,
    username:String,
})
const data=mongoose.model('appliedJobs',applySchema)
module.exports=data;