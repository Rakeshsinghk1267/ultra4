var express = require("express");
var app = express();
const path = require("path");


const sessions = require('express-session');
// var collection=require("./models/newfooditems_schema");
app.use(sessions({
    cookieName: "sessions",
    secret: "Rakesh",
    saveUninitialized:true,
    resave: false

}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));



const RegisterationData = require('./modules/login_schema.js');
const RegforbusinessData= require('./modules/busiregi_schema.js');

// var path = require('path');
// const RegisterationData = require('./modules/schema.js');
// const BUSRegisterationData = require('./modules/busiregi_schema.js');

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.json()); 


const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/Foodwebsite?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})

const connection = mongoose.connection;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});


app.get("/aboutus", function (req, res) {
    res.sendFile(__dirname + "/pages/about-us.html");
  });
  
app.get("/clinical-research", function (req, res) {
    res.sendFile(__dirname + "/pages/clinical-research.html");
  });
 

  app.get("/bookatest", function (req, res) {
    res.sendFile(__dirname + "/pages/book-a-test.html");
  });

  app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/pages/login1.html");
  });

  
  app.get("/userregister", function (req, res) {
    res.sendFile(__dirname +"/pages/register.html");
  });



//login 
app.get("/login", function (req, res) {
  session=req.session;
  if(sessions.user){
    res.send("welcome User <a href=\'/logout'>click to logout</a>")
  }
    res.sendFile(path.resolve( "pages/login.html"));
  });
  
  
  //user register 
  app.get("/userregister", function (req, res) {
    res.sendFile(path.resolve( "pages/register.html"));
  });

  // router.get("/logout", function (req, res) {
  //   req.session.destroy();
  //   res.redirect("/")
  // });
  
  




  app.post('/sendData', function(req,res){
    var obj = new RegisterationData({
        Name:req.body.Name,
        MobileNumber:req.body.MobileNumber,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,
    })
  
    RegisterationData.findOne({$or: [{Name:req.body.Name},{MobileNumber:req.body.MobileNumber},{Email:req.body.Email},]},function(err,docs){
      if(err || docs==null){
        obj.save(function(err, results) {
          if(results){
              res.send(results);
              console.log(results);
            }else{
              console.log(err)
              res.send(err);
            }
        })
      }else{
        res.sendStatus(500)
      }
      })
  
  
  });
  
  
  app.get('/getRegisterationData',(req,res)=>{
    RegisterationData.find(function(err,result){
            if(err || result==null)
            {
                
                console.log(err)
            }
            else if(result!=undefined)
            {
                
                console.log(result)
                res.send(result);
            }
        })
    });
  
  
    ///END OF CUSTOMER REGISTRATION
  
  // START restaurent REGISTER
  
  app.post('/sendRegbusinessData', function(req,res){
    var obj = new RegforbusinessData({
      Resname:req.body.Resname,
      location:req.body.location,
      ResmobileNumber:req.body.ResmobileNumber,
      Resemail:req.body.Resemail,
      Resmanagername:req.body.Resmanagername,
      MobileNumber:req.body.MobileNumber,
      Name:req.body.Name,
      MobileNumber:req.body.MobileNumber,
      Email:req.body.Email,
      Password:req.body.Password,
      ConfirmPassword:req.body.ConfirmPassword,
    })
  
    obj.save(function(err, results) {
        if(results){
              res.send(results);
              console.log(results);
        }else{
            console.log(err)
            res.send(err);
        }
    })
  
  });
  
  
  app.get('/getRegforbusinessData',(req,res)=>{
    RegforbusinessData.find(function(err,result){
            if(err || result==null)
            {
                
                console.log(err)
            }
            else if(result!=undefined)
            {
                
                console.log(result)
                res.send(result);
            }
        })
    });
  
  
    

  
  
  
  ////END CUSTOMER REGISTER
  
  
  
  
  
  ////find querry
  
  app.post('/logindata', function(req,res){
      //res.sendFile(__dirname + '/template/signup.html');
      console.log(req.body);
      
      RegisterationData.findOne({Email :req.body.Email,Password:req.body.Password}, function(err,docs){
          if(err || docs==null){
              // console.log(err)
              res.sendStatus(500)
          } 
          else{
              res.send(docs);
              console.log(docs);
          }
      })
     
  });
  













  
app.listen(7000, () => console.log("Succcessfully server started."));
