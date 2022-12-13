import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";

const EditServices = ({data,id}) => {
  
 const dispatch = useDispatch();
 const url = process.env.REACT_APP_SERVER_URL;

  const initialData ={
    service_name:data.service_name,
    price:data.price,
    offer:data.offer,
    service_id:data._id,
    _id:id,
  }


  const updateService = async(values) =>{
    console.log(values);

    const makeReq =await fetch(`${url}/updateShopService`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    })
     
    const response = await makeReq.json();
    console.log(response);
    if(response.message){
      console.log(response.message);
      dispatch(getOwnerShopDataAction(id));
    }

  }

  const deletService = async() =>{
    const makeReq =await fetch(`${url}/deletShopService`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({service_id:data._id,
        _id:id})
    })
     
    const response = await makeReq.json();

    if(response.message){
       console.log(response.message);
       dispatch(getOwnerShopDataAction(id));

       
    }

  }



  return (
    <>
        <Formik
         initialValues={initialData}
         onSubmit={(values)=>{
            updateService(values);
         }}
        >
            <Form>
                
                <div>
                <div>
                        <label> Service Name : </label>
                        <h2>{data.service_name}</h2>
                </div>
                <div>
                    <div>
                        <label> Price : </label>
                        <Field name="price" type="number"/>
                    </div>
                    <p><ErrorMessage name="price"/></p>
                </div>
                <div>
                    <div>
                        <label> Offer : </label>
                        <Field name="offer" type="number"/>
                    </div>
                    <p><ErrorMessage name="offer"/></p>
                </div>
                </div>
                <div>
                    <div>edit</div>
                    <button type="submit">Save</button>
                    <div onClick={deletService}>delet</div>
                </div>
            </Form>
        </Formik>
    </>
  )
}

export default EditServices;