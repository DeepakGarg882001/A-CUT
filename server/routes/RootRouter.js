import express from "express";
const router = express.Router();
import uploadImages from "../middleware/uploadImages.js";
import signup from "./signup.js";
import login from "./login.js";
import {
  createShop,
  getAllShops,
  getShopById,
  updateShopDetails,
  deletShop,
  addShopService,
  updateShopService,
  deletShopService,
  uploadShopImage,
} from "./shop.js";
import {
  add_services,
  get_services,
  update_service,
  delet_service,
} from "./plateformServices.js";
import {
  bookAppointment,
  getAllAppointments,
  getAppointmentById,
} from "./customerAppointment.js";


//    ======= Authentication Routes =========  //

router.route("/signup").post(signup);
router.route("/login").post(login);


router.route("/createShop").post(createShop);
router.route("/getAllShops").get(getAllShops);
router.route("/getShop").get(getShopById);
router.route("/updateShopDetails").post(updateShopDetails);
router.route("/addShopService").post(addShopService);
router.route("/deletShop").post(deletShop);
router.route("/updateShopService").post(updateShopService);
router.route("/deletShopService").post(deletShopService);
router.route("/uploadShopImage").post(uploadImages,uploadShopImage);


router.route("/addService").post(add_services);
router.route("/getServices").get(get_services);
router.route("/updateService").post(update_service);
router.route("/deletService").post(delet_service);

router.route("/bookAppointment").post(bookAppointment);
router.route("/getAllAppointments").post(getAllAppointments);
router.route("/getAppointmentById/:id").get(getAppointmentById);

export default router;
