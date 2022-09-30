const mongoose = require("mongoose");

const URL = process.env.DB_URL;

  mongoose.connect(URL).then(()=>{
    console.log(" MongoDb Connected to Server Successfully !");
  }
  ).catch((error)=>{
         console.log(error);
  });