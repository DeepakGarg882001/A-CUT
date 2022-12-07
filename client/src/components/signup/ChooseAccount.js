import React from 'react'
import { Link } from 'react-router-dom';


const ChooseAccount = () => {
  return (
   <>
      <div>
            
           
           <h1>Create Account as a</h1>

           <Link to="/createShop" ><button>Shop Owner</button></Link>
           <Link to="/signUp" ><button>Customer</button></Link>


      </div>
   </>
  )
}

export default ChooseAccount;