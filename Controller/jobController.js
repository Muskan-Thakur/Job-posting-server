// OnlinJob signup

const JobsModel=require('../Model/userJobSchema');

const getJob=async ( req,res)=>{

res.status(200).send(await JobsModel.find({}))
}
const getJobById=async(req,res)=>{
    const {id}=req.params;
    res.status(200).send(await JobsModel.find({_id:id}));
}
const postJob=async(req,res)=>{ 
    
    const jobTitle=req.body.jobTitle; 
    const jobDescription=req.body.jobDescription;
    const companyName=req.body.companyName;
    const companyLogo=req.body.companyLogo;
    const companyWebsite=req.body.companyWebsite;
    const companyDescription=req.body.companyDescription;
    const jobType=req.body.jobType;
    const location=req.body.location;
    const salaryRange=req.body.salaryRange;
    const applicationDeadline=req.body.applicationDeadline;
    const contactEmail=req.body.contactEmail;
    const skills=req.body.skills;
    const applicationInstructions=req.body.applicationInstructions;
 
    const newJob=new JobsModel({
        jobTitle:jobTitle,
        jobDescription:jobDescription,
        companyName:companyName,
        companyLogo:companyLogo,
        companyWebsite:companyWebsite,
        companyDescription:companyDescription,
        jobType:jobType,
        location:location,
        salaryRange:salaryRange,
        applicationDeadline:applicationDeadline,
        contactEmail:contactEmail,
        skills:skills,
        applicationInstructions:applicationInstructions  
    })
    await newJob.save();
    res.status(200).send(await JobsModel.find({}))
}
module.exports={
    getJob:getJob,
    postJob:postJob,
    getJobById:getJobById
}