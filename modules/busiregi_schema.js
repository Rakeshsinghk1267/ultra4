const mongoose = require('mongoose');

const RestaurentSchema = new mongoose.Schema(
    {
        Resname:{
            type:String,
            require:true
        },
        Location:{
            type:String,
            require:true
        },
        ResmobileNumber:{
            type:Number,
            require:true
        },
        Resemail:{
            type:String,
            require:true
        },
        Resmanagername:{
            type:String,
            require:true
        },   
        MobileNumber:{
            type:Number,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        
        password:{
            type:String,
            require:true,
        },
        ConfirmPassword:{
            type:String,
            require:true
        },       
    });

module.exports = mongoose.model("Regforbusiness" ,RestaurentSchema);