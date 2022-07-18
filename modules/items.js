const mongoose = require('mongoose');

const restaurents = new mongoose.Schema(
    {
        Item_id:{
            type:Number,
            require:true
        },
        Item_img:{
            type:String,
            require:true
        },
        Item_name:{
            type:String,
            require:true
        },
        Description:{
            type:String,
            require:true
        },
        Price:{
            type:Number,
            require:true
        },
        Resturant_id:{
            type:Number,
            require:true
        },
        Resturant_name:{
            type:Number,
            require:true
        },
        Category_name:{
            type:Number,
            require:true
        },
        Category_id:{
            type:Number,
            require:true
        },
        Sub_category_id:{
            type:Number,
            require:true
        },
        Sub_category_name:{
            type:String,
            require:true
        },
        Item_quantity:{
            type:Number,
            require:true
        },
    });

module.exports = mongoose.model("Items" , restaurents);