import express from "express";
const router = express.Router();


import signup from "./signup.js";
import login from "./login.js";
import {createShop,getAllShops,getShopById} from "./shop.js";
import { add_services,get_services,update_service } from "./plateformServices.js";
import {bookAppointment,getAllAppointments,getAppointmentById} from "./customerAppointmentRouter.js";

//    ======= Authentication Routes =========  //

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/createShop").post(createShop);
router.route("/getAllShops").get(getAllShops);
router.route("/oneShop/:id").get(getShopById);

router.route("/addService").post(add_services);
router.route("/getServices").get(get_services);
router.route("/updateService").post(update_service);

router.route("/bookAppointment").post(bookAppointment);
router.route("/getAllAppointments").get(getAllAppointments);
router.route("/getAppointmentById/:id").get(getAppointmentById);

export default router;
