const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("./db/conn");
require("./models/register")
const Register = require("./models/register");
const exp = require("constants");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");

const template_path = path.join(__dirname,"../templates/views");

const partials_path =  path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

// converting recieved data to
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render("index",

    );
})


app.get("/home", (req, res) => {
    res.render("index"); // Assumes 'index.hbs' is in your views directory
  });


app.get("/index", (req, res) => {
    res.render("index"); // Assumes 'index.hbs' is in your views directory
  });

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/mission",(req,res)=>{
    res.render("mission");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/login",(req,res)=>{

   
    res.render("login",{
        username: req.body.name, // <-- line 10 and if I remove this it goes to line 11
        emailid: req.body.email,
      });
})

app.get("/fireauth",(req,res)=>{

   
    res.render("fireauth");
})



app.post("/register",async(req,res)=>{
    console.log("user registration successful");
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password== cpassword){
            const registerUser = new Register({
                name:req.body.name,
                email:req.body.email,
                phonenumber:req.body.phonenumber,
                organisation:req.body.phonenumber,
                address:req.body.address,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })

            
            // jwt token 
            // const token = await registerUser.generateAuthToken();
            // console.log(token);

            const registered = await registerUser.save();
            res.status(201).render("index");
            
        }
        else{
            res.send("passwords are not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});



app.post("/login",async(req,res)=>{
    const mail = req.body.email;
    const pass = req.body.password;
    console.log(`${mail} ${pass}`);
    const user = await Register.findOne({email:mail});

    const isMatch = await bcrypt.compare(pass,user.password);

    

    if(isMatch){
        res.status(201).render("index",{
            username: req.body.name, // <-- line 10 and if I remove this it goes to line 11
            emailid: req.body.email,
          });
    }else{
        res.send("Invalid login detail");
    }
    
})

app.listen(port,()=>{
    console.log(`server is runing at port ${port}`);
})