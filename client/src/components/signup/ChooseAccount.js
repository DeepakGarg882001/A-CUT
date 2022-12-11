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
          <div className="usesignup">
            <img src={customerimg} alt="as a customer" id="signupimg" />

            <div className="customer">
              <Link to="/signUpcustomer" ><button id="as_customer" className="item_choose">Customer</button></Link>
            </div>
          </div>



          <div className="shopsignup">
            <img src={shopimg} alt="as a shopkeeper" id="signupimg" />

            <div className="shopowner">
              <Link to="/signUpowner" ><button id="shop_owner" className="item_choose">Shop Owner</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseAccount;