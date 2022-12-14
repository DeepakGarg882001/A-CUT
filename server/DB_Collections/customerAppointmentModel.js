import mongoose from "mongoose";
const bookModel = new mongoose.Schema({
  name: {
    type: String,
  },
  selectServices: [
    {
        services: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
});

const bookAppointment = mongoose.model("bookAppointment", bookModel);
export default bookAppointment;
