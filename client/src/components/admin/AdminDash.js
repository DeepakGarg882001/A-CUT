import React from 'react'
import {Link,Outlet} from "react-router-dom";
import "../../styles/adminDash.css";

const AdminDash = () => {
  return (
    <>
        <div className='admin-canvas'>
              
              <div className='admin-canvas-side-panel'>
                    
                    <ul className='admin-canvas-panel'>
                      <Link to="/admin/admin_home" ><li className='admin-canvas-panel-sec'>Home</li></Link>
                      <Link to="/admin/service_list" ><li className='admin-canvas-panel-sec'>Services</li></Link>
                      <Link to="/admin/search_acc" ><li className='admin-canvas-panel-sec'>Account</li></Link>
                      <Link to="/admin/report_marked" ><li className='admin-canvas-panel-sec'>Report</li></Link>
                    </ul>
                    
              </div>

              <div className='admin-canvas-right-panel'>
               <Outlet />
              </div>


        </div>
    </>
  )
}

export default AdminDash;