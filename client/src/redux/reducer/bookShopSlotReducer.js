import {
  SERVICE_IS_CLICKED,
  CLEAR_BOOKING_DATA,
  ADD_TIME_SLOT,
  UPDATE_DATE,
  UPDATE_ENDING_TIME,
  UPDATE_STARTING_TIME,
  UPDATE_COUNTER_NUMBER
} from "../reduxConstants";

const initialData = {
  counter_number: 1,
  date: new Date().toDateString(),
  services: [],
  total_duration: 0,
  time_slot: [],
  total_price: 0,
  error: "",
  starting_time:"",
  ending_time:"",
};

const bookShopSlotDataReducer = (data = { ...initialData }, action) => {
  switch (action.type) {
    case SERVICE_IS_CLICKED:
      if (action.data.active === true) {
        let length = data.time_slot.length;

        if (length === 0) {
          data.services = [
            ...data.services,
            { service_name: action.data.service_name,
              original_price:action.data.original_price,
              offer:action.data.offer,
              price: action.data.price,
            },
          ];
          data.total_price = data.total_price + action.data.price;
          data.total_duration = data.total_duration + action.data.duration;
        } else {
          let futureDuration = data.total_duration + action.data.duration;
          let slotShouldBe = futureDuration / 15;

          if (length > slotShouldBe) {
            let difference = length - slotShouldBe;
            for (let x = 0; x < difference; x++) {
              data.time_slot.pop();
            }
          } else if (length < slotShouldBe) {
            let difference = slotShouldBe - length;
            let count = slotShouldBe - length;
            let lastSlotIs = data.time_slot[length - 1].slot;
            let slotValue = lastSlotIs + 0.25;
            let booked = action.data.bookedSlots;
            let closeTime = action.data.closeTime;

            while (count !== 0) {
              for (let y = 0; y < booked.length; y++) {
                if (slotValue === booked[y].time_slot) {
                  data.error = "Slots are not available in sequence";
                  return { ...data };
                }
              }
              count--;
              slotValue = slotValue + 0.25;
            }

            slotValue = slotValue - 0.5;

            if (slotValue >= closeTime) {
              data.error = "Slots are not available in sequence";
              return { ...data };
            }

            if (count === 0 || data.error === "") {
              let slotIs = lastSlotIs + 0.25;
              data.error = "";

              for (let n = 0; n < difference; n++) {
                data.time_slot = [...data.time_slot, { slot: slotIs }];
                slotIs = slotIs + 0.25;
              }
            }
          }

          data.services = [
            ...data.services,
            { 
              service_name: action.data.service_name,
              original_price:action.data.original_price,
              offer:action.data.offer
            
            },
          ];
          data.total_price = data.total_price + action.data.price;
          data.total_duration = data.total_duration + action.data.duration;
        }


      } else {
          
        if(data.time_slot!==[]){
          let sections = action.data.duration/15;
          for(let i=0;i<sections;i++){
          data.time_slot.pop();
          }
        }

        data.services = data.services.filter(
          (e) => e.service_name !== action.data.service_name
        );
        data.total_price = data.total_price - action.data.price;
        data.total_duration = data.total_duration - action.data.duration;
        data.error="";
      }
      let updatedData = { ...data };
      return updatedData;

    case CLEAR_BOOKING_DATA:
      return { ...initialData };

    case ADD_TIME_SLOT:

      if (data.total_duration <= 15) {
        data.error="";
        data.time_slot = [{ slot: action.data.slot }];
      } else {
        let booked = action.data.bookedSlots;
        let isFree = action.data.slot + 0.25;
        let count = data.total_duration / 15;
        let closeTime = action.data.closeTime;
        let totalSlots = data.total_duration / 15;
        data.time_slot = [];

        while (count !== 0) {
          for (let k = 0; k < booked.length; k++) {
            if (isFree === booked[k].time_slot) {
              data.error = "Slots are not available in sequence";
              return { ...data };
            }
          }
          count--;
          isFree = isFree + 0.25;
        }
        isFree = isFree - 0.5;
        console.log(isFree, closeTime);

        if (isFree >= closeTime) {
          data.error = "Slots are not available in sequence";
          return { ...data };
        }

        if (count === 0 || data.error === "") {
          let slotIs = action.data.slot;
          data.error = "";

          for (let m = 0; m < totalSlots; m++) {
            data.time_slot = [...data.time_slot, { slot: slotIs }];
            slotIs = slotIs + 0.25;
          }
        }
      }

      return { ...data };
     
    case UPDATE_DATE :  data.date= action.data;
                        return {...data};

    case UPDATE_ENDING_TIME:  
                        data.ending_time= action.data;
                        return {...data};

    case UPDATE_STARTING_TIME :
                       data.starting_time= action.data;
                        return {...data};
    case UPDATE_COUNTER_NUMBER:
                      data.counter_number = action.data;
                      return {...data};
    default:
      return data;
  }
};

export default bookShopSlotDataReducer;
