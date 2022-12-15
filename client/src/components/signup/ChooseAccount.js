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
          <div className="usersignup" >
            <img src={customerimg} alt="as a customer" id="signupimg" />
            <Link to="/signUp:role" id="do_regis">Customer</Link>
          </div>



          <div className="shopsignup">
            <img src={shopimg} alt="as a shopkeeper" id="signupimg" />

            <Link to="/signUp:role"  id="do_regis">Shop Owner</Link>
          </div>

        </div>


      </div>
    </>
  )
}

export default ChooseAccount;