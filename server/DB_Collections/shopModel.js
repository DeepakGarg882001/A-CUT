import mongoose from "mongoose";
const shopModel = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  rating: {
    type: Number,
  },
  services: {
    type: [],
  },
  prices: {
    hair_cut: {
      type: Number,
    },
    beard: {
      type: Number,
    },
    massag: {
      type: Number,
    },
    hair_color: {
      type: Number,
    },
  },
});

const shop = mongoose.model("shop", shopModel);
export default shop;
