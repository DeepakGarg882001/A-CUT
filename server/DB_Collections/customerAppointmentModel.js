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
      service_name:{
        type:String
      },
      price:{
        type:Number
      },
      original_price:{
        type:Number
      },
      offer:{
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
  counter_number:{
    type:Number,
    default:1
  },
  time_slot:[
    {
      slot:{
        type:Number
      }
    }
  ],
  starting_time:{
    type:String,
  },
  ending_time:{
    type:String,
  },
  date: {
    type:String,
   
  },
  shop_address:{
    type:String,
  },
  payment_status:{
    type:String,
    default: "Not Paid"
  },
  checkIn_status:{
    type:String,
    default:"none"
  }
  
 
},{timestamps:true});

const bookAppointment = mongoose.model("bookAppointment", bookModel);
export default bookAppointment;