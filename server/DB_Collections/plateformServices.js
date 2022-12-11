import mongoose from "mongoose";

const plateformServices_Doc = new mongoose.Schema({
    service_name:{
        type:String
    }
})

const plateformServices_Col = mongoose.model("PLATEFORM_SERVICE",plateformServices_Doc);
export default plateformServices_Col;