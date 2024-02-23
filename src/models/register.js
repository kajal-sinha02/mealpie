
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const MealpieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    organisation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

//generating token (jwt)

MealpieSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id : this._id()},"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
        return token;

    } catch (error) {
        res.send(`error : ${error}`);
        console.log(error);
    }
}

MealpieSchema.pre("save",async function(next){
    if(this.isModified("password"))
    {
    this.password = await bcrypt.hash(this.password,10);

    this.confirmpassword= undefined;
    }



    next();
});
// Model

const Register = new mongoose.model("Register",MealpieSchema);

module.exports = Register;