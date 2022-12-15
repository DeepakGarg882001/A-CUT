import mongoose from "mongoose.js";
let a=new Array(18);
const slots = new mongoose.Schema({
    date:{
        type:new Date(),
    },
    slot:a.fill(0),
});

const slotModel=mongoose.model("slot",slots);
export default slotModel;