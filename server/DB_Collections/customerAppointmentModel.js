import mongoose from "mongoose";
let a = new Array(18);
const bookModel = new mongoose.Schema({
  customer_id:{
    type:String
  },
  customer_name:{
    type:String
  },
  services:[
    {
      name:{
        type:String
      },
      price:{
        type:Number
      }
    }
  ],
  total_price:{
    type:Number
  },
  total_duration:{
    type:Number
  },
  shop_name:{
    type:String
  },
  shop_id:{
     type:String
  },
  time_slot:{
    type:Number
  },
  time:{
    start:{
      type:String
    },
    end:{
      type:String
    }
  },
  date: {
    type:Date,
    default:Date.now(),
  },
  
 
});

const bookAppointment = mongoose.model("bookAppointment", bookModel);
export default bookAppointment;