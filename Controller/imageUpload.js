const multer=require('multer');
const {v2 : cloudinary}=require('cloudinary');
          
const upload = multer({
  limits: {
    fileSize: 10000000 // Limit the file size to 10 MB
  }
});
  
cloudinary.config({ 
    cloud_name: 'dfxcveahw', 
    api_key: '326252244196275', 
    api_secret: 'v32smP-WhgDU9SLIcU6j9EICD14' 
  });
  const uploadPic=(req,res)=>{
    // console.log(file.path)
    if(!req.file) 
    {
    return res.status(400).send({message:"Image is require"});
    }
    const path=req.file.path;
    // console.log("path : ----" , path);
    // const b64 = Buffer.from(req.file.buffer).toString("base64"); // we get buffer property only if we upload on memory storage
    // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        // cloudinary.uploader.upload(path)
        // .then((result)=>{
        //     console.log("file uploaded successfully");
        //     return res.status(200).send({file:result})
        // })
        // .catch((error)=>{
        //     console.log("ERROR");
        // })
        cloudinary.uploader.upload_stream({}, (error, result) => {
            if (error) {
              console.log("ERROR", error);
              return res.status(500).send({ message: "Error uploading image" });
            }
        
            console.log("file uploaded successfully", result);
            return res.status(200).send({ image: result.secure_url });
          }).end(req.file.buffer);
    }
    module.exports={upload,uploadPic};