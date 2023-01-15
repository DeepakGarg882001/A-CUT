import React from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik';

const AddCounter = ({data}) => {

  const initialValues ={
    counter_number:"",
    counter_head:"",
    _id:data._id,
  }
  
  const validation="";
  
  const addNewCounter = async(values)=>{
      console.log(values);
       
      const {counter_number}= values;

      let counterLength = data.shop_counters.length;
      let shopCounters = data.shop_counters;
      for(let j=0; j<counterLength;j++){
          if(counter_number === shopCounters[j].counter_number){
            // Show error
          }
      }

      const makeReq = await fetch();

  }
  return (
    <>
        <div>
          
          <div>
            <h2>Add New Counter</h2>
          </div>
         <div>
               <Formik 
               initialValues={initialValues}
               validation={validation}
               onSubmit={(values)=>{
                addNewCounter(values);
               }}
               >
                <Form>
                   <div>
                    <label>Counter Number : </label>
                    <Field type="number" placeholder="1" name="counter_number" />
                    <p>
                        <ErrorMessage name="counter_number"/>
                    </p>
                    </div>

                    <div>
                    <label>Counter Head : </label>
                    <Field type="text" placeholder="Ram" name="counter_head" />
                    <p>
                        <ErrorMessage  name="counter_head" />
                    </p>
                    </div>

                    <button type='submit' >Create</button>
                </Form> 
               </Formik>
         </div>
       

        </div>
    </>
  )
}

export default AddCounter;