const mongoose = require('mongoose');

const restaurents = new mongoose.Schema(
    {
        resturant_id:{
            type:Number,
            require:true
        },
        resturant_name:{
            type:String,
            require:true
        },
        resturant_img:{
            type:String,
            require:true
        },
        resturant_tag:{
            type:String,
            require:true
        },
        resturant_Address:{
            type:String,
            require:true
        },
        resturant_city:{
            type:String,
            require:true
        },
        resturant_pincode:{
            type:Number,
            require:true
        },
        resturant_phone_number:{
            type:Number,
            require:true
        },
        resturant_email:{
            type:String,
            require:true
        },
        Resturant_Manager_Details:{
            type:String,
            require:true
        },
        resturant_manager_name:{
            type:String,
            require:true
        },
        resturant_manager_phonenumber:{
            type:Number,
            require:true
        },
        resturant_manager_email:{
            type:String,
            require:true
        },
        Take_Away:{
            type:String,
            require:true
        },
        Delivery:{
            type:String,
            require:true
        },

    });

module.exports = mongoose.model("Restaurents" , restaurents);