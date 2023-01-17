import express from "express";
import dotENV from "dotenv";
import startServer from "./server.js";
import router from "./routes/RootRouter.js";
import cors from "cors";
import path, { dirname } from "path"
import { fileURLToPath,URL } from "url";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
//  Importing dotENV file
dotENV.config({ 
     path: "./config/config.env" 
});

 const frontUrl = process.env.FRONT_END_URL;

 const app = express();
 app.use(cookieParser());
 app.use(cors({credentials: true, origin: frontUrl,allowedHeaders:['Content-Type', 'Authorization']}));
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);
 app.use("/filesUpload",express.static(path.join(__dirname,"/filesUpload")));
//  app.use(https);

 app.use("/api/v1",router);

 export default app;

 startServer();
 





