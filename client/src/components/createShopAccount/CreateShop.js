import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from "yup";


const CreateShop = () => {

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
                      <Field />
                      <p><ErrorMessage /></p>
                    </div>
                    <div>
                      <Field />
                      <p><ErrorMessage /></p>
                    </div>
                    <div>
                      <Field />
                      <p><ErrorMessage /></p>
                    </div>
                    <div>
                      <Field />
                      <p><ErrorMessage /></p>
                    </div>
                    <div>
                      <Field />
                      <p><ErrorMessage /></p>
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

export default CreateShop;