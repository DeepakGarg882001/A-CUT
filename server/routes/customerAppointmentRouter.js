import customerAppointment from "../DB_Collections/customerAppointmentModel.js";

const bookAppointment = async (request, response) => {
  console.log("book no.", request.body);
  try {
    const { userId, name, selectServices, totalPrice } = request.body;
    if (!userId || !name || !selectServices || !totalPrice) {
      return response
        .status(401)
        .json({ error: "Please fill the details completely !" });
    }
    const newBooking = await customerAppointment.create({
        name,
        selectServices,
        totalPrice,
      });
      console.log(newBooking);
      if(newBooking){
        response.status(201).json({
            success:true,
            data:newBooking,
            message:"booking successfully",
        })
      }else{
        response.status(400).json({error:"not booked"});
      }
  } catch (error) {
    response.status(400).json({ error });
  }
};

const getAllAppointments=async(request,response)=>{
    try {
        const appointments=await customerAppointment.find({});
        if (appointments.length > 0) {
            response.status(200).json({
              success: true,
              data: appointments,
            });
          } else {
            response.status(400).json({
              success: false,
              data: "no appointment found",
            });
          }
    } catch (error) {
        response.status(400).json({ error });
    }
};

const getAppointmentById = async (request, response) => {
    const foundAppointment = await customerAppointment.findById(request.params.id);
    if (foundAppointment) {
      response.status(200).json({
        success: true,
        data: foundAppointment,
      });
    } else {
      response.status(404).json({
        success: false,
        data: "no particular appointment found",
      });
    }
  };
export {bookAppointment,getAllAppointments,getAppointmentById}; 