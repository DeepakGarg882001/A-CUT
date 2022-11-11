import express from "express";
import dotENV from "dotenv";
import mongoose from "mongoose";
// import 
const app = express();

//  Importing dotENV file
dotENV.config({ path: "./config.env" });


const URL = process.env.DB_URL;

  mongoose.connect(URL,{useNewUrlParser : true}).then(()=>{
    console.log(" MongoDb Connected to Server Successfully !");
  }
  ).catch((error)=>{
         console.log(error);
  });



// Starting server at PORT No.
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT NO. : ${PORT}`);
});