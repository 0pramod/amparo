import React from "react";
// import { Link } from "react-router-dom";
import { emailTop } from "../../assets/images.js";
const Contacts = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-section__email">
          <img className="contact-section__email__logo" src={emailTop} alt="" />
          <p>info@amparoinsurance.com</p>
        </div>
        <div className="contact-section__containts"> </div>
        <div className="contact-section__containts"> </div>
      </div>
    </>
  );
};

export default Contacts;
