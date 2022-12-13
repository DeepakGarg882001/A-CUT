import { takeEvery, put } from "redux-saga/effects";

import {
  GET_SERVICES_LIST,
  SET_SERVICES_LIST,

  GET_OWNER_SHOP_DATA,
  SET_OWNER_SHOP_DATA,
  
} from "./reduxConstants";

const url = process.env.REACT_APP_SERVER_URL;


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
   
    
  }
  
  export default Saga;
