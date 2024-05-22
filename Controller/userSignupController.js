// OnlinJob signup
const nodemailer=require('nodemailer')
const signupModel=require('../Model/userSignupSchema')
const contactModel=require('../Model/contactSchema')
const getSignupDetails=async(req,res)=>
    {
        res.status(200).send(await signupModel.find({}))
    }
    const forgotPassword=async(req,res)=>{

        const email=req.body.email;
        const user=await signupModel.findOne({email});
        if(!user)
            {
return res.status(400).send({msg:"Email does not exist"})
            }
        const otp=Math.floor(1000+Math.random()*9000).toString();
        if(user)
            { 
             if(!user.isVerified)
                {
                    return res.status(400).send({msg:"Email does not exist"})
                }
            if(user.isVerified)
                {

                    const currentUser=await signupModel.findOneAndUpdate({_id:user._id}, {otp},{new:true});
                    const transporter=nodemailer.createTransport({
                        service: "Gmail",
                        host: "****.gmail.com",
                        port: 465,
                        secure: true,
                        // secure: false, // Use `true` for port 465, `false` for all other ports
                        auth: {
                          user: "*******@gmail.com", // add ur email and password
                          pass: "**de **** qu** ****",
                        },
                    })
                    const info = await transporter.sendMail({
                        from: "Job Posting" ,
                    to: email, // list of receivers
                        subject: "Job Posting Verification ✔", // Subject line
                        // text: otp, // plain text body
                        html: `    <html>
                        <head>
                            <title>OTP for JobPosting</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    width: 80%;
                                    margin: auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 5px;
                                    background-color: #f9f9f9;
                                }
                                .header {
                                    text-align: center;
                                    color: #444;
                                }
                                .otp {
                                    text-align: center;
                                    font-size: 24px;
                                    font-weight: bold;
                                    color: #333;
                                    margin: 20px 0;
                                }
                                .footer {
                                    text-align: center;
                                    color: #888;
                                    font-size: 14px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">JobPosting OTP Verification</h2>
                                <p>Hello,</p>
                                <p>Your One-Time Password (OTP) for JobPosting is:</p>
                                <p class="otp">${otp}</p>
                                <p>Please do not share this OTP with anyone.</p>
                                <p class="footer">Thank you,<br>JobPosting Team</p>
                            </div>
                        </body>
                        </html>
                        `, 
                      });
                    return res.status(200).send({msg:"otp sent succesfully"})
                    
                }
             
            }
            }
            const reset=async(req,res)=>
                {
                    const password=req.body.password;
                    const otp=req.body.otp;
                    const email=req.body.email;
                    const user=await signupModel.findOne({email});
if(!user)
    {
return res.status(400).send({msg:"email does not exist"})
    }
    if(user)
        { 
         if(!user.isVerified)
            {
                return res.status(400).send({msg:"Email does not exist"})
            }
        if(user.isVerified)
         {

            if(user.otp==otp)  
{
const currentUser=await signupModel.findOneAndUpdate({_id:user._id}, {otp:"-1",password},{new:true});
return res.status(200).send({msg:"password changed successfully"})

}
else{
    return res.status(400).send({msg:"wrong otp"})
}
                
            }
         
        }          }
    const postSignup=async(req,res)=>
        {
            const name=req.body.name;
            const username=req.body.username;
            const email=req.body.email;
            const password=req.body.password;
            const user=await signupModel.findOne({email});
            const otp=Math.floor(1000+Math.random()*9000).toString();
            if(user)
            { 
             if(user.isVerified)
                {
                    return res.status(400).send({msg:"User already registered"})
                }
            if(!user.isVerified)
                {

                    const currentUser=await signupModel.findOneAndUpdate({_id:user._id}, {name,username,password,otp,isVerified:false},{new:true});
                }
            }
            const newSignup=new signupModel({name,username,email, password,otp, isVerified:false})

            const transporter=nodemailer.createTransport({
                service: "Gmail",
                host: "****.gmail.com",
                port: 465,
                secure: true,
                // secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                  user: "******@gmail.com", // add ur email and password
                  pass: "**de **** qu** ****",
                },
            })
            const info = await transporter.sendMail({
                from: "Job Posting" ,
            to: email, // list of receivers
                subject: "Job Posting Verification ✔", // Subject line
                // text: otp, // plain text body
                html: `    <html>
                        <head>
                            <title>OTP for JobPosting</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    width: 80%;
                                    margin: auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 5px;
                                    background-color: #f9f9f9;
                                }
                                .header {
                                    text-align: center;
                                    color: #444;
                                }
                                .otp {
                                    text-align: center;
                                    font-size: 24px;
                                    font-weight: bold;
                                    color: #333;
                                    margin: 20px 0;
                                }
                                .footer {
                                    text-align: center;
                                    color: #888;
                                    font-size: 14px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">JobPosting OTP Verification</h2>
                                <p>Hello,</p>
                                <p>Your One-Time Password (OTP) for JobPosting is:</p>
                                <p class="otp">${otp}</p>
                                <p>Please do not share this OTP with anyone.</p>
                                <p class="footer">Thank you,<br>JobPosting Team</p>
                            </div>
                        </body>
                        </html>
                       `
              });


            await newSignup.save();
            res.status(200).send(await signupModel.find({}))
        }

       const VerifyOtp=async(req,res)=>
        {  const email=req.body.email;
            const otp=req.body.otp;
            const temp=req.body?.temp;
            const user=await signupModel.findOne({email});
            if(!user)
                {
                    return res.status(400).send({msg:"Invalid Email"})
                }
                if(temp&&otp==user.otp)
                    {
                        return res.status(200).send({msg:"OTP is Valid"})
                    }
            if(otp==user.otp)
                {
         const currentUser=await signupModel.findOneAndUpdate({_id:user._id}, {otp:"-1",isVerified:true},{new:true});
         return res.status(200).send({msg:"User Verified Successfully"})
        
                }
                else{
                    return res.status(400).send({msg:"Wrong OTP"})
                }
                }

        
        const loginDetail=async(req,res)=>
            {
                const email=req.body.email;
                const password=req.body.password;
        
                const SignLoginDb=await signupModel.findOne({email:email,password:password})
                if(!SignLoginDb)
                    {
                        return res.status(400).send({msg:"User Not Found"})
                    }
                    if(!SignLoginDb.isVerified)
                        {
                            return res.status(400).send({msg:"User Not Found"})

                        }
                    return res.status(200).send({msg:"Login Done"})
            }

            const feedback=async(req,res)=>  {
                    const name=req.body.name;
                    const email=req.body.email;
                    const subject=req.body.subject;
                    const msg=req.body.msg;

                    const newFeed=new contactModel({name,email,subject,msg})
                    await newFeed.save();
                    res.status(200).send(await contactModel.find({}))
                }
module.exports={
        getSignupDetails:getSignupDetails,
        postSignup:postSignup,
        loginDetail:loginDetail,
        feedback:feedback,
        VerifyOtp:VerifyOtp,
        forgotPassword:forgotPassword,
        reset:reset
    }