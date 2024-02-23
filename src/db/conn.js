const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/MealpieRegistration").then(()=>{
    console.log("connnection established")
}).catch((err)=>{
    console.log(err);
});