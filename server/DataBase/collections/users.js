import mongoose from "mongoose";

const UserDoc = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number
    },
    password:{
      type:String,
    },
    phone:{
      type:Number
    },
    userRole: {
      role: {
        type: String,
        default: "customer",
      },
    },
    email:{
        type:String
    },
    token:{
        type:String
    },
    userAccPlay: {
        accPlay: {
          type: String,
          default: "running",
        },
      },
      userAccPlayChanges: [
        {
          accPlay: {
            type: String,
          },
          adminId: {
            type: String,
          },
        },
      ],

})

const UserCol = mongoose.model("USER", UserDoc);

export default UserCol;