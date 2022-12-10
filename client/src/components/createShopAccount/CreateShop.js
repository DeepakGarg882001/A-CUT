import React,{useState} from 'react'
import userAvtar from "../../Assets/shop3.jpg";
import {useDispatch} from "react-redux";
import ShopDetails from './ShopDetails';

const CreateShop = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const user =[];
  const crrAvtar = user.image ? `${url}/${user.image.filePath}` : userAvtar;

  const [fileObj, setFileObj] = useState("");
  const [fileArray, setFileArray] = useState("");
  const [active, setActive] = useState(false);

  const handleFile = (e) => {
    setFileObj(e.target.files);

    const files = Array.from(e.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve(ev.target.result);
          });

          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setFileArray(images);
    });
  };

  const saveImage = async () => {
    setActive(!active);

    let data = new FormData();
    if (fileObj.length === 0) {
      setActive(!active);
      // return toast.error(`Hi,${user.name}. Please Choose your Image`, {
      //   position: toast.POSITION.TOP_CENTER,
      // });
    }

    for (let i = 0; i < fileObj.length; i++) {
      data.append("file", fileObj[i]);
    }
    data.append("userId", user._id);

    const makeRequest = await fetch(`${url}/user/dashboard/image`, {
      method: "POST",
      body: data,
    });
    

    const response = await makeRequest.json();
    console.log(response);

    // if(response.message){
    //   toast.success(response.message, {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   dispatch(GetCurrentUser(response.data));

    // }else{
    //   if(response.error.name){
    //     toast.error(response.error.name, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });

    //   }else{
    //     toast.error(response.error, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
        
    //   }
    // }

    setActive(false);
  };

  return (
    <>
      <div className="change-profile-canvas">
        {/* <div className="change-profile-sec">
          <div className="change-profile-sec-top">
            {fileArray ? (
              fileArray.map((url, index) => {
                return (
                  <React.Fragment key={index}>
                    <img src={url} className="change-profile-top-img-size" />
                  </React.Fragment>
                );
              })
            ) : (
              <img src={crrAvtar} className="change-profile-top-img-size" />
            )}
          </div>
          <div className="change-profile-sec-middle">
            <input
              style={{ width: "100px" }}
              type="file"
              onChange={(e) => handleFile(e)}
            />
          </div>
          <div className="change-profile-sec-bottom">
          {fileArray ? <button
              className="change-profile-btn"
              disabled={active}
              onClick={saveImage}
            >
              Save
            </button> : null}
            
          </div>
        </div> */}


       <ShopDetails />

      </div>
    </>
  );
};

export default CreateShop;