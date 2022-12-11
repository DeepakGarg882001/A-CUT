import {
    ADD_TO_HAIR,
    REMOVE_FROM_HAIR ,
    ADD_TO_BEARD,
    REMOVE_FROM_BEARD,
    ADD_TO_HEAD_MASSAG,
    REMOVE_FROM_HEAD_MASSAG,
    ADD_TO_HAIR_COLOR,REMOVE_FROM_HAIR_COLOR
    } from "../reduxConstants";

// hair cut 
export const addToHair = (data) => {
  console.log("action called", data);
  return {
    type: ADD_TO_HAIR,
    data,
  };
};


export const removeFromHair = (data) => {
  console.log("action called", data);
  return {
    type: REMOVE_FROM_HAIR,
    data,
  };
};


// beard 
export const addToBeard = (data) => {
    console.log("action called", data);
    return {
      type: ADD_TO_BEARD,
      data,
    };
  };



export const removeFromBeard = (data) => {
    return {
      type: REMOVE_FROM_BEARD,
      data,
    };
  };


//   head massag
export const addToHeadMassag = (data) => {
    // console.log("action called", data);
    return {
      type: ADD_TO_HEAD_MASSAG,
      data,
    };
  };


export const removeFromHeadMassag = (data) => {
    return {
      type: REMOVE_FROM_HEAD_MASSAG,
      data,
    };
  };


//   hair color 
export const addToHairColor = (data) => {
    // console.log("action called", data);
    return {
      type: ADD_TO_HAIR_COLOR,
      data,
    };
  };


export const removeFromHairColor = (data) => {
    return {
      type: REMOVE_FROM_HAIR_COLOR,
      data,
    };
  };
