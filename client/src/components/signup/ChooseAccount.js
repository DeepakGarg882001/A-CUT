import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/chooseaccunt.css";

const ChooseAccount = () => {
  return (
    <>
      <div className="choose_accunt">


        <h1 className="create">Create Account As A</h1>
        <div className="choose">
          <Link to="/signUpowner" ><button id="shop_owner" className="item_choose">Shop Owner</button></Link>
          <Link to="/signUpcustomer" ><button id ="as_customer" className="item_choose">Customer</button></Link>

        </div>


      </div>
    </>
  )
}

export default ChooseAccount;