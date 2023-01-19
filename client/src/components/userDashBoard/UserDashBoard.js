import React from "react";
import "../../styles/userProfile.css";
import MyAppointments from "../customer/MyAppointments";
import { useDispatch,useSelector } from "react-redux";
const UserDashBoard = () => {
  const userData=useSelector((state)=>state.userReducer);
  // userData=userData;
  console.log("user",userData.email);
  const email=userData.email;
  return (
    <>
      <div className="update_profile">
        <h2>Update Profile</h2>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              // aria-describedby="emailHelp"
              placeholder="Enter Your user name"
              autocomplete="off"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your email"
              autocomplete="off"
            
            />
          </div>
          <div className="form-group">
            <label>Choose Photo</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="Number"
              className="form-control"
              // id="exampleInputPassword1"
              placeholder="Enter the Age"
              autocomplete="off"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="appoint-page">
      <MyAppointments/>
      </div>
    </>
  );
};

export default UserDashBoard;
