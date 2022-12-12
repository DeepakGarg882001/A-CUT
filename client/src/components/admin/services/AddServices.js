import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const AddServices = () => {
  const url = process.env.REACT_APP_SERVER_URL;
   const navigate = useNavigate();
   const dispatch =useDispatch();

   const initialValues = {
     service_name:""
   }

   const addToServices = async(values)=> {
      
    const makeReq =await fetch(`${url}/addService`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    })
     
    const response = await makeReq.json();

    if(response.message){
      console.log(response.message);
       navigate("/admin/service_list");
    }

   }
 
  return (
    <>
      <div>
           <h1>Add Services</h1>
          <Formik
          initialValues={initialValues}
          onSubmit={(values)=>{
            addToServices(values)
             
          }}
          >
            <Form>
              <Field type="text" name="service_name" />
              <ErrorMessage name="service_name" />

              <div>
               <button type="submit">Submit</button>
              </div>

            </Form>
          </Formik>
      </div>
      
       

    </>
  )
}

export default AddServices;