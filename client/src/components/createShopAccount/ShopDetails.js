import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from "yup";

const ShopDetails = () => {

    const initialFormData = {
        owner_name:"",
        shop_name:"",
        email:"",
        phone:"",
        shop_address:"",
        password:"",
        confirmPassword:""
      } 
     
      const formValidation = yup.object().shape({
        owner_name: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
        shop_name: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
        email: yup.string().email("Invalid email").required("Email is required !"),
        phone: yup.string().min(10).max(10).required("Phone No. required !"),
        password: yup.string().min(4).max(12).required("password is required"),
        confirmPassword: yup
          .string("Confirm your Password")
          .oneOf([yup.ref("password")], "Password does not match"),
      });
    

  return (
    <>
         <div>
         <Formik
               initialValues={initialFormData}
               validationSchema={formValidation}
               onSubmit={()=>{
                      
               }}
               >
                <Form>
                    <div>
                      <Field 
                        name="owner_name"
                        type= "text"
                      />
                      <ErrorMessage name="owner_name" />
                    </div>
                    <div>
                      <Field 
                          name="owner_name"
                        type= "text"
                      />
                      
                      <p><ErrorMessage  name='owner_name'/></p>
                    </div>
                    <div>
                      <Field 
                        name="email"
                        type="email"
                      />
                      {/* <p><ErrorMessage  name='owner_name' /></p> */}
                    </div>
                    <div>
                      <Field 
                          name="owner_name"
                        type= "text"
                      />
                      {/* <p><ErrorMessage   name='owner_name' /></p> */}
                    </div>
                    <div>
                      <Field 
                          name="owner_name"
                        type= "text"
                      />
                      {/* <p><ErrorMessage  name='owner_name' /></p> */}
                    </div>

                    <div>
                      <button type='submit'> Proceed </button>
                    </div>
                </Form>
               </Formik>

         </div>
    </>
  )
}

export default ShopDetails;