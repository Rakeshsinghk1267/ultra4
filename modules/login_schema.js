const mongoose = require('mongoose');

const userInfo = new mongoose.Schema(
    {
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true,
        }
        
    });

module.exports = mongoose.model("RegisterationData" , userInfo);
