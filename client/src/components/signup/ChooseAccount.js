import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/chooseaccunt.css";
import salon_customer from "../../Assets/salon_customer.png";
import salon_owner from "../../Assets/salon_owner.png";

const ChooseAccount = () => {
  useEffect(()=>{
    window.scrollTo({top:130,behavior:"smooth"});
  },[]);
  return (
    <>
      <div className="choose_accunt">
       

        <div className="choose">
          <div className="customer-signup">
            <img src={salon_customer} alt="as a customer" className="customer-signup-img" />
            <div>
            <Link to="/emailverifycustomer" className="customer-signup-text" ><p> New Customer</p></Link>
            </div>
           
          </div>

          <div className="owner-signup">
            <img src={salon_owner} alt="as a shopkeeper" className="owner-signup-img" />
             <div>
             <Link to="/emailverifyowner" className="owner-signup-text" > <p> Create a New Salon</p></Link>
             </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseAccount;
