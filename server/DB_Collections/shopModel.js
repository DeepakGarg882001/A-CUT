import mongoose from "mongoose";
const shopModel = new mongoose.Schema({
  name: {
    type: String,
  },
  // mobile: {
  //   type: Number,
  // },
  // address: {
  //   type: String,
  // },
  // rating: {
  //   type: Number,
  // },
  services: {
    hair_cut: {
      type: String,
    },
    beard: {
      type: String,
    },
    massag: {
      type: String,
    },
    hair_color: {
      type: String,
    },
  },
  totalPrice:{
    type:Number,
    default:0,
  }
});

const shop = mongoose.model("shop", shopModel);
export default shop;