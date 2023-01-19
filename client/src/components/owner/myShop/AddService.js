import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

const AddService = ({ data }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const plateformServices = useSelector(
    (state) => state.plateformServiceReducer
  );
  const shopServices = data.length!==0 ? data.shop_services : [];

  const filterByReference = (plateformServices, shopServices) => {
    let res = [];
    if(shopServices.length!==0){
    res = plateformServices.filter((el) => {
      return !shopServices.find((element) => {
        return element.service_name === el.service_name;
      });
    });
  }
    return res;
  };
  const notSelectedServices = filterByReference(
    plateformServices,
    shopServices
  );

  const addNewService = async (values) => {
    const makeReq = await fetch(`${url}/addShopService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.message) {
      dispatch(getOwnerShopDataAction(data._id));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          service_name: "",
          shop_id: data._id,
        }}
        onSubmit={(values) => {
          addNewService(values);
        }}
      >
        <Form>
          <div>
            <div>
              <label>Service Name : </label>
              <Field as="select" name="service_name">
                <option value="">Select</option>
                {notSelectedServices.length !==0? notSelectedServices.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={data.service_name}>
                        {data.service_name}
                      </option>
                    </React.Fragment>
                  );
                }):null}
              </Field>
            </div>
            <p>
              <ErrorMessage name="service_name" />
            </p>
            <div>
              <button type="submit">
                <MdOutlinePlaylistAddCheck /> Add{" "}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddService;
