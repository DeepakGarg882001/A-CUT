import express from "express";
const router = express.Router();


import signup from "./signup.js";
import login from "./login.js";


//    ======= Authentication Routes =========  //

router.route("/signup").post(signup);
router.route("/login").post(login);
    
    

export default router;
