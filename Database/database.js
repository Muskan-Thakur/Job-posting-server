const mongodb=require('mongoose')
mongodb.connect('mongodb+srv://muskan:muskan@muskan.fl3sy9q.mongodb.net/jobsDB?retryWrites=true&w=majority&appName=Muskan').then(()=>{
    console.log('Connected the database')  
})

  