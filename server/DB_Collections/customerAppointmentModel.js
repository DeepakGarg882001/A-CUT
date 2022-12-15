import mongoose from "mongoose";
let a = new Array(18);
const bookModel = new mongoose.Schema({
  date: {
    type:Date,
    default:new Date().toJSON().slice(0, 10),
  },
  shop_id:{
     type:String
  },
  
  slots: a.fill(0),
  customerDetails: [
    {
      name: {
        type: String,
      },
      service: {
        type: String,
      },
      slot: {
        type: Number,
      },
      price: {
        type: Number,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const bookAppointment = mongoose.model("bookAppointment", bookModel);
export default bookAppointment;
