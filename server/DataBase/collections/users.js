import mongoose from "mongoose";

const UserDoc = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number
    },
    role:{
        type:String
    },
    email:{
        type:String
    },
    token:{
        type:String
    }

})