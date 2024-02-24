const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dipuranjansethy1432:mongopassword@cluster0.4f5sap9.mongodb.net/mealpie?retryWrites=true&w=majority").then(()=>{
    console.log("connnection established")
}).catch((err)=>{
    console.log(err);
});