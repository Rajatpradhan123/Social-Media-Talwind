const mongoose = require("mongoose")



mongoose.connect("mongodb://127.0.0.1:27017/SocialMediadb")
.then(()=> console.log("Data Conection Established"))
.catch((err)=> console.log(err.message))


