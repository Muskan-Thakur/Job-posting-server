const usermodel=require('../Model/userSchema')
const getUserdetail=async (req,res)=>
    {
     res.status(200).send(await usermodel.find({})) 
    }
  
const signup=async(req,res)=>{
    const fullName=req.body.fullName;
    const contact=req.body.contact;
    const email=req.body.email;
    const password=req.body.password;

    const newUser= new usermodel({fullName,contact,email,password})
    await newUser.save();
        res.status(200).send(await usermodel.find({}) )
    }
    
    const login=async(req,res)=>{

        const email=req.body.email;
        const password=req.body.password;

const user=await usermodel.findOne({email:email,password:password}) 
if(!user)
    {
 return res.status(400).send({msg:"user not found"})
    }
         return res.status(200).send({msg:"Login done"} )
    }
    module.exports={
        getUserdetail:getUserdetail,
        signup:signup,
        login:login
    }
    