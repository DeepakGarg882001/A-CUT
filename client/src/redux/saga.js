import { takeEvery, put } from "redux-saga/effects";

import {
  GET_SERVICES_LIST,
  SET_SERVICES_LIST,
  
} from "./reduxConstants";

const url = process.env.REACT_APP_SERVER_URL;

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
   
    
  }
  
  export default Saga;
