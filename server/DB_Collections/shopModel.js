import mongoose from "mongoose";
const shopModel=new mongoose.Schema({
    name:{
        type:String,
    },
    Mobile:{
        type:Number,
    },
    address:{
        type:String,
    },
    rating:{
        type:Number, 
    },
    services:{
        type:[],
    },
    prices:{
        hair_cut:{
            type:Number,
        },
        beard:{
            type:Number,
        },
        massag:{
            type:Number,
        },
        hair_color:{
            type:Number,
        },
    },

})