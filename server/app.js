import express from "express";
import dotENV from "dotenv";
import startServer from "./server.js";
import router from "./routes/RootRouter.js";
import cors from "cors";
import bodyParser from "body-parser";
// import https from "https";

//  Importing dotENV file
dotENV.config({ 
     path: "./config/config.env" 
});

 const frontUrl = process.env.FRONT_END_URL;

 const app = express();
 app.use(cors({credentials: true, origin: frontUrl,allowedHeaders:['Content-Type', 'Authorization']}));
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(https);

 app.use("/api/v1",router);

 export default app;

 startServer();
 





