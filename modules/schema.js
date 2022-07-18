const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            require:true
        },
        MobileNumber:{
            type:Number,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true,
        },
        ConfirmPassword:{
            type:String,
            require:true
        },
        
    });

module.exports = mongoose.model("RegisterationData" , CustomerSchema);
