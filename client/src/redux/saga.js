import { takeEvery, put } from "redux-saga/effects";

import {
  GET_SERVICES_LIST,
  SET_SERVICES_LIST,
  GET_OWNER_SHOP_DATA,
  SET_OWNER_SHOP_DATA,
  GET_ALL_SHOPS_DATA,
  SET_ALL_SHOPS_DATA,
  GET_SHOP_DATA,
  SET_SHOP_DATA,
  GET_OWNER_CUSTOMER_DATA,
  SET_OWNER_CUSTOMER_DATA,
  GET_BOOKED_SLOTS,
  SET_BOOKED_SLOTS,
  GET_MY_APPOINTMENTS,
  SET_MY_APPOINTMENTS,
} from "./reduxConstants";

const url = process.env.REACT_APP_SERVER_URL;


// Call API to get the List of all booked Appointments with respect to Unique User
function* findMyAppointments(action) {
  const makeRequest = yield fetch(
    `${url}/getMyAppointments?key=${action.data}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_MY_APPOINTMENTS, data: data });
}

// Call API to get the List of all Customers who booked the Slot for your Shop
function* getOwnerCustomerData(action) {
  const makeRequest = yield fetch(
    `${url}/getAllCustomerAppointments`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(action.data),
      credentials: "include",
    }
  );

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_OWNER_CUSTOMER_DATA, data: data });
}

// Call API to get the List of all booked slots with respect to a partcular Shop
function* getBookedSlots(action) {
  const makeRequest = yield fetch(`${url}/getAllAppointments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
    credentials: "include",
  });

  const response = yield makeRequest.json();
  let data = [];
  if (response.data) {
    if (response.data !== "No Appointment Found") {
      let bookedSlots = response.data;
      let slotsLength = bookedSlots.length;

      for (let s = 0; s < slotsLength; s++) {
        let slotSeries = bookedSlots[s].time_slot.length;
        for (let k = 0; k < slotSeries; k++) {
          data.push({ time_slot: bookedSlots[s].time_slot[k].slot });
        }
      }
    }
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_BOOKED_SLOTS, data: data });
}

// Call API to get the List of Whole Details of a particular Shop
function* getUniqueShopData(action) {
  const makeRequest = yield fetch(`${url}/getShop?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_SHOP_DATA, data: data });
}

// Call API to get the List of All Shops
function* getAllShopsList(action) {
  const makeRequest = yield fetch(`${url}/getAllShops?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_ALL_SHOPS_DATA, data: data });
}

// Call API to get the whole data of a Shop of a Particular Owner
function* getOwnerShopData(action) {
  const makeRequest = yield fetch(`${url}/getShop?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_OWNER_SHOP_DATA, data: data });
}

// Call API to get the list of All services
function* fetchServiceList() {
  const makeRequest = yield fetch(`${url}/getServices`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const response = yield makeRequest.json();
  let data;
  if (response.data) {
    data = response.data;
  }
  if (response.error) {
    data = response;
  }
  yield put({ type: SET_SERVICES_LIST, data: data });
}

// Main Function Starts from here.
function* Saga() {
  yield takeEvery(GET_SERVICES_LIST, fetchServiceList);
  yield takeEvery(GET_OWNER_SHOP_DATA, getOwnerShopData);
  yield takeEvery(GET_ALL_SHOPS_DATA, getAllShopsList);
  yield takeEvery(GET_SHOP_DATA, getUniqueShopData);
  yield takeEvery(GET_OWNER_CUSTOMER_DATA, getOwnerCustomerData);
  yield takeEvery(GET_BOOKED_SLOTS, getBookedSlots);
  yield takeEvery(GET_MY_APPOINTMENTS, findMyAppointments);
}

export default Saga;
