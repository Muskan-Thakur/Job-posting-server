const exp=require('express')
const app=exp();
const cors=require('cors');
const PORT=process.env.PORT||2000;
const database=require('./Database/database')  
const jobcontroller=require('./Controller/jobController')
const usercontroller=require('./Controller/UserController');
const userSignupController = require('./Controller/userSignupController');
const uploadPic = require('./Controller/imageUpload');
const applyJob=require('./Controller/applyToJobController');
app.use(exp.json());
app.use(cors());
app.get("/", (req, res) => res.send("Express on Vercel"));        

app.get('/getJob',jobcontroller.getJob)
app.get('/getJob/:id',jobcontroller.getJobById)
app.post('/postJob',jobcontroller.postJob)
app.get('/getUser',usercontroller.getUserdetail)
app.post('/signup',usercontroller.signup)
app.post('/login',usercontroller.login)

app.get('/getSignupDetails',userSignupController.getSignupDetails)
app.post('/postSignup',userSignupController.postSignup)
app.post('/verify',userSignupController.VerifyOtp);
app.post('/forgot',userSignupController.forgotPassword);
app.post('/reset',userSignupController.reset);
app.post('/loginDetail', userSignupController. loginDetail)
app.post('/feedback',userSignupController.feedback)
app.post('/uploadPic',uploadPic.upload.single('file'),uploadPic.uploadPic)
app.post('/applyJob',applyJob.applyToJob);
app.get('/applyJob',applyJob.getApplyData);
app.use((err, req, res, next) => { // Add error handling middleware
    console.error(err.stack);
    res.status(500).send('Something went wrong.');
  });            
app.listen(PORT,()=>
{
    console.log("Running the Port");
})
module.exports=app;