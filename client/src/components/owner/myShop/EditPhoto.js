import React, { useState } from "react";
import "../../../styles/myShop.css";

function EditPhoto({ data }) {
  const url = process.env.REACT_APP_SERVER_URL;
  const crrAvtar = data.image ? `${url}/${data.image.filePath}` : "";
  const [showBtn,setShowBtn] = useState(true);
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
    setShowBtn(true);

    let shopImageData = new FormData();
    if (fileObj.length === 0) {
      setActive(!active);
    }

    for (let i = 0; i < fileObj.length; i++) {
      shopImageData.append("file", fileObj[i]);
    }
    shopImageData.append("_id", data._id);

    const makeRequest = await fetch(`${url}/uploadShopImage`, {
      method: "POST",
      body: shopImageData,
    });

    const response = await makeRequest.json();
    console.log(response);

    if (response.message) {
      // dispatch(GetCurrentUser(response.data));
    } else {
      if (response.error.name) {
      } else {
      }
    }

    setActive(false);
  };

  return (
    <>
      <div className="myshop-back-img-sec">
        {fileArray ? (
          fileArray.map((url, index) => {
            return (
              <React.Fragment key={index}>
                <img src={url} className="myshop-back-img-size" alt="shop_img" />
              </React.Fragment>
            );
          })
        ) : (crrAvtar!==""? <img src={crrAvtar} className="change-profile-top-img-size" alt="shop_img" /> :
          <div  className="myshop-back-imgShadow" >Does not have any Images</div>
        )}
      </div>
      <div className="myshop-img-btn-sec">
        <input
          style={{ display:showBtn===true? "block":"none"}}
          type="file"
          onChange={(e) => handleFile(e)}
          onClick={()=>setShowBtn(false)}
          className="myshop-img-choose-btn"
        />
        
          {fileArray ? (
            <button
              className="myshop-back-img-save-btn"
              disabled={active}
              onClick={saveImage}
              style={{display:showBtn===true? "none":"block"}}
            >
              Save
            </button>
          ) : null}
        
      </div>
    </>
  );
}

export default EditPhoto;
