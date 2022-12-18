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
  SET_OWNER_CUSTOMER_DATA
  
} from "./reduxConstants";

const url = process.env.REACT_APP_SERVER_URL;

// Call API to get the List of Whole Shops
function* getOwnerCustomerData(action) {

  const makeRequest = yield fetch(`${url}/getAllAppointments?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  
  const response = yield makeRequest.json();
  let data ;
  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: SET_OWNER_CUSTOMER_DATA, data: data });
 
}




// Call API to get the List of Whole Shops
function* getUniqueShopData(action) {

  const makeRequest = yield fetch(`${url}/getShop?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  
  const response = yield makeRequest.json();
  let data ;
  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: SET_SHOP_DATA, data: data });
 
}



// Call API to get the List of Whole Shops
function* getAllShopsList(action) {

  const makeRequest = yield fetch(`${url}/getAllShops?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  
  const response = yield makeRequest.json();
  let data ;
  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: SET_ALL_SHOPS_DATA, data: data });
 
}



// Call API to get the whole data of a Shop of a Particular Owner
function* getOwnerShopData(action) {

  const makeRequest = yield fetch(`${url}/getShop?key=${action.data}`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  
  const response = yield makeRequest.json();
  let data ;
  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: SET_OWNER_SHOP_DATA, data: data });
 
}


// Call API to get the list of All services
function* fetchServiceList() {

  const makeRequest = yield fetch(`${url}/getServices`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  
  const response = yield makeRequest.json();
  let data ;
  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: SET_SERVICES_LIST, data: data });
 
}


// Main Function Starts from here.
function* Saga() {

  yield takeEvery(GET_SERVICES_LIST,fetchServiceList);
  yield takeEvery(GET_OWNER_SHOP_DATA,getOwnerShopData);
  yield takeEvery(GET_ALL_SHOPS_DATA,getAllShopsList);
  yield takeEvery(GET_SHOP_DATA,getUniqueShopData);
  yield takeEvery(GET_OWNER_CUSTOMER_DATA,getOwnerCustomerData);
   
  
  }
  
  export default Saga;
