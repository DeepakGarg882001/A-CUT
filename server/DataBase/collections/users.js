import mongoose from "mongoose";

const UserDoc = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number
    },
    role:{
        type:String
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