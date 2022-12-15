import mongoose from "mongoose";
let a = new Array(18);
const bookModel = new mongoose.Schema({
  date: {
    type:Date,
    default:Date.now(),
  },
  slots: a.fill(0),
  customerDetails: [
    {
      name: {
        type: String,
      },
      selectServices: {
        type: String,
      },
      slot: {
        type: Number,
      },
      totalPrice: {
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
