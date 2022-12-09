import mongoose from "mongoose";

const Services_Doc = new mongoose.Schema({
    service_name:{
        type:String
    }
})

const Services_Col = mongoose.Model("SERVICE",Services_Doc);
export default Services_Col;