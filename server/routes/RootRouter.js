import express from "express";
const router = express.Router();


import signup from "./signup.js";
import login from "./login.js";
import {createShop,getAllShops,getShopById} from "./shop.js";

//    ======= Authentication Routes =========  //

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/createShop").post(createShop);
router.route("/getAllShops").get(getAllShops);
router.route("/oneShop/:id").get(getShopById);
    
    

export default router;
