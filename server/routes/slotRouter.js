import slotModel from "../DB_Collections/slotModel";

const addSlot = async (request, response) => {
  console.log(request.body);
  try {
    const { date, slot } = request.body;
    if (!date || !slot) {
      return response.status(400).json({ error: "Please Enter the slot" });
    }
    const addToDatabase = await slotModel.create({
      date,
      slot,
    });
    if (addToDatabase) {
      response.status(201).json({
        success: true,
        data: newBooking,
        message: "added successfully",
      });
    }else{
        response.status(400).json({error:"not added"});
    }
  } catch (error) {
    response.status(400).json({ error });
  }
};

export {addSlot};