import shop from "../DB_Collections/shopModel.js";
import UserCol from "../DB_Collections/users.js";
import uploadImages from "../middleware/uploadImages.js";
const createShop = async (request, response) => {
  try {
    const {
      owner_name,
      owner_id,
      shop_name,
      shop_mobile,
      shop_address,
      shop_services,
    } = request.body;

    if (
      !owner_name |
      !owner_id |
      !shop_name |
      !shop_mobile |
      !shop_address |
      !shop_services
    ) {
      return response
        .status(400)
        .json({ error: "Please fill the form completely" });
    }
    const isShopAlreadyCreated = await shop.findOne({ owner_id });
    if (isShopAlreadyCreated != null) {
      return response
        .status(402)
        .json({ error: "You have Already Created a Shop" });
    }

    const newShop = await shop.create({
      owner_name,
      owner_id,
      shop_name,
      shop_mobile,
      shop_address,
      shop_services,
    });

    console.log(newShop);
    if (newShop) {
      const _id = owner_id;
      const addShopToUserCOl = await UserCol.findOneAndUpdate(
        { _id },
        { shop_id: newShop._id }
      );
      console.log("user data is :");
      console.log(addShopToUserCOl);
      if (!addShopToUserCOl) {
        return response
          .status(401)
          .json({ error: "Shop Created with some error" });
      }

      return response.status(201).json({
        success: true,
        data: newShop,
        message: "created sussessfully",
      });
    } else {
      response.status(400).json({ error: "not created" });
    }
  } catch (error) {
    response.status(400).json({ error });
  }
};

// get all shops
const getAllShops = async (request, response) => {
  const query = request.query.key;
  console.log(query);
  console.log("geting all shops");
  let shops;
  if (query != "undefined") {
    console.log("all shops");
    shops = await shop.find({
      shop_services:{$elemMatch:{service_name:{ $regex: query, $options: "i" }}}}
    );
  } else {
    console.log("service based shops");
    shops = await shop.find({});
  }
  console.log(shops);
  if (!shops) {
    return response.status(400).json({
      success: false,
      error: "Process Failed",
    });
  }
  return response.status(200).json({
    success: true,
    data: shops,
    message: "Got The Shops",
  });
};

// get a Particular Shop by ID
const getShopById = async (request, response) => {
  const _id = request.query.key;
  console.log(_id);

  const foundShop = await shop.findById(_id);
  console.log(foundShop);
  if (foundShop) {
    response.status(200).json({
      success: true,
      data: foundShop,
    });
  } else {
    response.status(404).json({
      success: false,
      data: "no particular shop found",
    });
  }
};

// update a Particular Shop details
const updateShopDetails = async (request, response) => {
  console.log(request.body);

  const { owner_name, shop_name, shop_mobile, shop_address, _id } =
    request.body;

  if (!owner_name | !shop_name | !shop_mobile | !shop_address | !_id) {
    return response
      .status(400)
      .json({ error: "Please Provide all the Details" });
  }

  const updateDetails = await shop.findByIdAndUpdate(_id, request.body);

  if (!updateDetails) {
    return response.status(400).json({ error: "Process Failed" });
  }
  return response.status(200).json({ message: "successfully updated" });
};

// update Particular Shop Image
const uploadShopImage = async (request, response) => {
  console.log(request);
  console.log("uploadImage is here");
  const { _id } = request.body;
  let FileObject = {};

  request.files.forEach((element) => {
    const file = {
      fileName: element.originalname,
      filePath: element.path,
      fileType: element.mimetype,
      fileSize: element.size,
    };

    FileObject = file;
  });

  console.log(FileObject);

  const addImgPaths = await shop.findByIdAndUpdate(_id, { image: FileObject });

  if (!addImgPaths) {
    return response.status(400).json({ error: "Process Failed" });
  }

  return response.status(200).json({ message: "updated successfully" });
};

// delete a Particular Shop
const deletShop = async (request, response) => {
  console.log("delete a Particular Shop");
  const { _id } = request.body;
  if (!_id) {
    return response
      .status(401)
      .json({ error: "Please Provide Proper Details" });
  }
  const removeShop = await shop.findByIdAndDelete(_id);

  if (!removeShop) {
    return response.status(401).json({ error: "Process Failed" });
  }

  const editUser = await UserCol.findOneAndUpdate(
    { shop_id: _id },
    { shop_id: "" }
  );
  if (!editUser) {
    return response.status(401).json({ error: "Shop Deleted with some Error" });
  }

  return response
    .status(200)
    .json({ message: " Your Shop Deleted Successfully " });
};

// Add a Service To a Particular Shop
const addShopService = async (request, response) => {
  const { service_name, shop_id } = request.body;

  if (!service_name | !shop_id) {
    return response
      .status(400)
      .status({ error: "Please Fill the form Correctly" });
  }
  const _id = shop_id;
  const addService = await shop.findByIdAndUpdate(_id, {
    $push: {
      shop_services: {
        service_name,
      },
    },
  });

  if (!addService) {
    return response.status(401).json({ error: "Process Failed" });
  }

  return response.status(200).json({ message: "Service added" });
};

// update a Particular Shop Services
const updateShopService = async (request, response) => {
  console.log("updating shop service");
  const { service_name, price, offer, service_id, _id } = request.body;

  if (!service_name | !price | !offer | !service_id | !_id) {
    return response
      .status(400)
      .status({ error: "Please Fill the form Correctly" });
  }

  const updateService = await shop.updateMany(
    { _id, "shop_services._id": service_id },
    {
      $set: {
        "shop_services.$.price": price,
        "shop_services.$.offer": offer,
      },
    }
  );
  console.log(updateService);

  if (!updateService) {
    return response.status(401).json({ error: "Process Failed" });
  }

  return response.status(200).json({ message: "Service Updated" });
};

// delete a Particular Shop Service
const deletShopService = async (request, response) => {
  const { _id, service_id } = request.body;

  if (!_id | !service_id) {
    return response
      .status(400)
      .json({ error: "Please Provide Proper Details" });
  }

  const removeService = await shop.findByIdAndUpdate(_id, {
    $pull: { shop_services: { _id: service_id } },
  });
  if (!removeService) {
    return response.status(401).json({ error: "Process Failed" });
  }

  return response.status(200).json({ message: "Service Deleted" });
};

export {
  createShop,
  getAllShops,
  getShopById,
  updateShopDetails,
  deletShop,
  addShopService,
  updateShopService,
  deletShopService,
  uploadShopImage,
};
