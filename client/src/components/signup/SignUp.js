import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiFillLock} from "react-icons/ai";
import {BsFillCheckCircleFill} from "react-icons/bs";
import "../../styles/signup.css";
import * as yup from "yup";
import Swal from "sweetalert2";

import {Formik,Form,Field,ErrorMessage} from "formik";
import { Link ,useNavigate,useParams} from "react-router-dom";



const SignUp = () => {
  
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  
  let { role } = useParams();

  const initialFormData = {
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
    role:role
  } 
 
  const formValidation = yup.object().shape({
    name: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
    email: yup.string().email("Invalid email").required("Email is required !"),
    phone: yup.string().min(10).max(10).required("Phone No. required !"),
    password: yup.string().min(4).max(12).required("Password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("Password")], "Password does not match"),
  });

  
  const postDataToServer = async(values)=>{
    
    let timerInterval;
    const waitingAlert = Swal.fire({
      title: " Please Wait ",
      showConfirmButton: false,
      html: "It may Take time upto  <b> </b> minutes .",
      timer: 130000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
           let min = Math.floor((Swal.getTimerLeft() / 1000 / 60) << 0);
           let sec = Math.floor((Swal.getTimerLeft() / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
          b.textContent = min+":"+sec;
        }, 1000);
      },
    });

  const makeReq = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(
    waitingAlert
  );

   
    const response = await makeReq.json();

    if (response.error) {
      if(response.error.name){
       Swal.fire("Sorry", `${response.error.name}`, "error");
      }
      else{
       Swal.fire("Sorry", `${response.error}`, "error");
      }
   }
   if (response.message) {
     Swal.fire(
       " Successfully Registered ! ","","success"
     );
     navigate("/");
   }

  }

  return (
    <>
      <div className="loginInner">
        <Formik
        initialValues={initialFormData}
        validationSchema={formValidation}
        onSubmit={(values, {resetForm})=>{
               console.log(values);
               postDataToServer(values);
               resetForm();
        }}>
          <Form>

         
          <div className="heading">
            <h2>Registration</h2>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <FaUserAlt/>
              </div>
              <Field type="text" name="name" placeholder="Username" />
            </div>
            <div>
              <p id="error_msg_sign"><ErrorMessage name="name" /></p>
              
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <SiGmail/>
              </div>
              <Field type="email" name="email"  placeholder="abc@example.com" />
            </div>
            <div>
            <p id="error_msg_sign"><ErrorMessage name="email" /></p>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsFillTelephoneFill/>
              </div>
              <Field type="number" name="phone" placeholder="Enter your phone number" />
            </div>
            <div>
            <p id="error_msg_sign"><ErrorMessage name="phone" /></p>
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <AiFillLock/>
              </div>
              <Field type="password" name="password"  placeholder="Password" />
              
            </div>
             <div>
             <p id="error_msg_sign"><ErrorMessage name="password" /></p>
             </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsFillCheckCircleFill/>
              </div>
              <Field type="text" name="confirmPassword"  placeholder="ConfirmPassword" />
            </div>
            <div>
              <p id="error_msg_sign"><ErrorMessage name="confirmPassword" /></p>
              
            </div>
          </div>
          <div className="inputWrapper">
            <button type="submit" >Submit</button>
          </div>
          <div className="forgot_sign">
            <p>If already registered ? <Link to="/login">login</Link></p>
          </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
