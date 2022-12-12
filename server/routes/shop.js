import shop from "../DB_Collections/shopModel.js";

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

    if ( !owner_name |  !owner_id | !shop_name | !shop_mobile | !shop_address | !shop_services ) {
      return response.status(400).json({error:"Please fill the form completely"})
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
      response.status(201).json({
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
  const shops = await shop.find({});
  if (shops.length > 0) {
    response.status(200).json({
      success: true,
      data: shops,
    });
  } else {
    response.status(400).json({
      success: false,
      data: "no shop found",
    });
  }
};


// get shop by ID
const getShopById = async (request, response) => {
  const foundShop = await shop.findById(request.params.id);
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


export { createShop, getAllShops, getShopById };
