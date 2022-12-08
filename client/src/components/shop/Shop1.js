import React from "react";
import "../../styles/shop1.css";
import img1 from "../../Assets/shop1.jpg";
import img2 from "../../Assets/shop2.jpg";
import img3 from "../../Assets/shop3.jpg";
const Shop1 = () => {
  return (
    <>
      <header id="header">
        <h2>Near Government School (Jant-Pali Mahendergarh)</h2>
        <div className="designer">
          <h3>Designs you can select here...</h3>
          <div className="designs">
            <div className="design">
              <img src={img1} alt="img" />
            </div>
            <div className="design">
              <img src={img2} alt="img" />
            </div>
            <div className="design">
              <img src={img3} alt="img" />
            </div>
          </div>
          <div className="designs">
            <div className="design">
              <img src={img1} alt="img" />
            </div>
            <div className="design">
              <img src={img2} alt="img" />
            </div>
            <div className="design">
              <img src={img3} alt="img" />
            </div>
          </div>
          <h3>Enter the details for booking </h3>
          <form id="form-shop">
            <input type="text" id="name" placeholder="Enter your name" />
            <select name="service" id="hair-cut">
              <option value="hair-cut">Select services you want</option>
              <option value="hair-cut">hair-cut</option>
              <option value="Beared">Beared</option>
              <option value="head-massage">head-massage</option>
              <option value="hair-color">hair-color</option>
            </select>
            <button className="btn">Submit</button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Shop1;
