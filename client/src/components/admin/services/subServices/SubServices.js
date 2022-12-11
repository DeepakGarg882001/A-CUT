import React from "react";
import AddSubService from "./AddSubService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CiEdit } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SubServices = ({ data }) => {
  const updateSubService = async () => {};

  const deletSubService = async (_id) => {
    console.log(_id);
  };

  return (
    <>
      <div>
        {data.sub_services.length !== 0 ? (
          data.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Formik
                  initialValues={{
                    _id: data._id,
                    sub_services: {
                      service_name: data.sub_services.service_name,
                    },
                  }}
                  onSubmit={(values) => {
                    updateSubService(values);
                  }}
                >
                  <Form>
                    <div>
                      <img />
                    </div>

                    <div>
                      <Field name="sub_services.service_name" />
                    </div>

                    <div>
                      <div>
                        <CiEdit />
                      </div>
                      <button type="submit">
                        <TiTickOutline />
                      </button>
                      <div
                        onClick={() => deletSubService(data.sub_services._id)}
                      >
                        <MdOutlineDeleteOutline />
                      </div>
                    </div>
                  </Form>
                </Formik>
              </React.Fragment>
            );
          })
        ) : (
          <div>
            <h4> No Sub-Services </h4>
          </div>
        )}
      </div>

      <div>
        <AddSubService />
      </div>
    </>
  );
};

export default SubServices;
