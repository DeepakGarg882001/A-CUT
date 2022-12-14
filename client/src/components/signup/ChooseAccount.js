import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/chooseaccunt.css";
import customerimg from "../../Assets/userchoose.png";
import shopimg from "../../Assets/shopchoose.png";


const ChooseAccount = () => {
  return (
    <>
      <div className="choose_accunt">


        <h1 className="create">Create Account As A</h1>

        <div className="choose">
          <div className="usersignup">
            <img src={customerimg} alt="as a customer" id="signupimg" />

            <h3>Customer</h3>
          </div>



          <div className="shopsignup">
            <img src={shopimg} alt="as a shopkeeper" id="signupimg" />

            <h3>Shop Owner</h3>


          </div>

        </div>
        <div className="choose_btn">
          <Link to="/signUpcustomer" ><button id="as_customer" className="item_choose">Signup</button></Link>
        </div>

      </div>
    </>
  )
}

export default ChooseAccount;