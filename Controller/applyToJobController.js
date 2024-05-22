const applyModel=require('../Model/applyJobSchema');
const applyToJob=async(req,res)=>{
    const companyName=req.body.companyName;
    const username=req.body.username;
    const jobTitle=req.body.jobTitle;
    const newData=new applyModel({
    companyName:companyName,
    username:username,
    jobTitle:jobTitle
    })
    await newData.save();
res.status(200).send({msg:"Applied Successfully"})
}
const getApplyData=async(req,res)=>{
    res.status(200).send(await applyModel.find({}))
}
module.exports={
    applyToJob:applyToJob,
    getApplyData:getApplyData
}