// import React from "react";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import "./form.css";
const SRForm = () => {
  return (
    <div className="main_container ">
      <div className="form_container">
        <p className="form_heading">
          Fill the form below to sell or rent your product
        </p>
        <form className="form_container_main">
          <div className="personal_details">
            <div className="personal_details_heading">
              <div className="personal_details_heading-logo">
                <img src={one} alt="" />
              </div>
              <div className="personal_details_heading-text">
                <p>Your Basic information</p>
              </div>
            </div>
            <div className="personal_details_input">
              <div className="first_last_name">
                <div className="first_name">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="last_name">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="email">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="mobile_userid">
                <div className="mobile">
                  <input type="tel" placeholder="Mobile No." required />
                </div>
                <div className="userid">
                  <input type="text" placeholder="Telephone No." required />
                </div>
              </div>
              <div className="pickup_location">
                <input type="text" placeholder="Pickup Location" required />
              </div>
            </div>
          </div>
          <div className="product_details">
            <div className="product_details_heading">
              <div className="product_details_heading-logo">
                <img src={two} alt="" />
              </div>
              <div className="product_details_heading-text">
                <p>Product Details</p>
              </div>
            </div>
            <div className="product_details_input">
              <div className="type_productname">
                <div className="product_type">
                  <input type="text" placeholder="Product Type" required />
                </div>
                <div className="product_name">
                  <input type="text" placeholder="Product Name" required />
                </div>
              </div>
              <div className="product_description">
                <textarea
                  className="product_description_text"
                  placeholder="Product Description"
                  cols={25}
                  required
                ></textarea>
              </div>
              <div className="price_image">
                <div className="price">
                  <input type="text" placeholder="Price" required />
                </div>
              </div>
              <div className="product_image">
                <label>Upload image </label>
                <input type="file" accept="image/png, image/jpeg" required />
              </div>
              <div className="product_video">
                <label>Upload video </label>
                <input type="file" accept="video" />
              </div>
            </div>
          </div>
          <div className="radio">
            <div className="radio_sell">
              <input type="radio" id="radio_sell_text" name="radio_btn" />
              <label htmlFor="radio_sell_text">Sell</label>
            </div>
            <div className="radio_rent">
              <input type="radio" id="radio_rent_text" name="radio_btn" />
              <label htmlFor="radio_rent_text">Rent</label>
            </div>
          </div>
          <div className="submit">
            <button className="submit_btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SRForm;
