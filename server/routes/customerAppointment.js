import customerAppointment from "../DB_Collections/customerAppointmentModel.js";

const bookAppointment = async (request, response) => {
  try {
    console.log(request.body);

    const {
      customer_id,
      customer_name,
      services,
      total_price,
      total_duration,
      shop_name,
      shop_id,
      counter_number,
      time_slot,
      date,
    } = request.body;

    if (
      !customer_id |
      !customer_name |
      !services |
      !total_price |
      !total_duration |
      !shop_name |
      !shop_id |
      !counter_number |
      !time_slot |
      !date
    ) {
      return response
        .status(401)
        .json({ error: "Please fill the details completely !" });
    }
    

    // Check is slot free or not

    const getSlotList = await customerAppointment.find({
      shop_id,
      date,
      counter_number,
    });

    let bookedLength = getSlotList.length;

    for( let a =0;a<bookedLength;a++){
       
       let slotSequence = getSlotList[a].time_slot.length;
       let userSlots = time_slot.length;
       for(let i=0;i<slotSequence;i++){
          
         for(let j=0;j<userSlots;j++){

           if(getSlotList[a].time_slot[i].slot=== time_slot[j].slot){
            return response.status(400).json({error:"Slot is Not Free, Try with another Time Slot"})
           }
         }

       }
    }

    // So Slot is Free So add it to dataBase
    const addToAppointments = await customerAppointment.create(request.body);
    if(!addToAppointments){
      return response.status(400).json({error:"Proess Failed"})
    } 

    return response.status(200).json({message:"Your Slot Booked Successfully"})
    
    



  } catch (error) {
    response.status(400).json({ error });
  }
};

const getAllAppointments = async (request, response) => {
  try {
    console.log("get data of booked slots");
    console.log(request.body);

    const { shop_id, counter_number, date } = request.body;

    const appointments = await customerAppointment.find({
      shop_id,
      date,
      counter_number,
    });
    console.log(appointments);
    if (appointments.length > 0) {
      response.status(200).json({
        success: true,
        data: appointments,
      });
    } else {
      response.status(201).json({
        success: false,
        data: "No Appointment Found",
      });
    }
  } catch (error) {
    response.status(400).json({ error });
  }
};

const getAppointmentById = async (request, response) => {
  const foundAppointment = await customerAppointment.findById(
    request.params.id
  );
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
export { bookAppointment, getAllAppointments, getAppointmentById };
