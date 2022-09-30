const express = require("express");
const dotENV = require("dotenv");
const mongoose = require("mongoose");
const https = require('https');

const app = express();

//  Importing dotENV file
dotENV.config({ path: "./config.env" });

require("./DataBase/DB_Excess");

// Starting server at PORT No.
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT NO. : ${PORT}`);
});