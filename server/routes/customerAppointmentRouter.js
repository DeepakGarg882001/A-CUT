import customerAppointment from "../DB_Collections/customerAppointmentModel.js";

const bookAppointment = async (request, response) => {
  console.log("book no.", request.body);
  try {
    const { date, slots, customerDetails, shop_id } = request.body;
   
    console.log(customerDetails);

    if (!date | !slots | !customerDetails | !shop_id) {
      return response
        .status(401)
        .json({ error: "Please fill the details completely !" });
    }
    // if(date in DB) 
    // {
    // update previous entry by updating slot index to True and cusomterDetails in customerDetails array
    // prevEntry = fetch from DB
    // prevEntry['slots'][parseInt(slots[0])] = True
    // prevEntry['customer_details'].push(customerDetails)
    // push changes to DB
    // };
    // else:
    // {
    // create new entry with structure {date: date, slots:[F,F,F,F,F], customer details:[]}
    // newEntry = {date:  date, slots:[F,F,F,F,F], customer_details:[]}
    // now update this entry
    // newEntry['slots'][parseInt(slots[0])] = True
    // newEntry['customer_details'].push(customerDetails)
    // push changes to DB
    // }

    const newBooking = await customerAppointment.create({
      date,
      slots,
      customerDetails,
      shop_id,
    });

    console.log(newBooking);
    if (newBooking) {
      response.status(201).json({
        success: true,
        data: newBooking,
        message: "booking successfully",
      });
    } else {
      response.status(400).json({ error: "not booked" });
    }
  } catch (error) {
    response.status(400).json({ error });
  }
};

const getAllAppointments = async (request, response) => {
  try {
    const shop_id  = request.query.key;

    const appointments = await customerAppointment.find({ shop_id });
    console.log(appointments);
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
