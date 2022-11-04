import React from "react";
// import { Link } from "react-router-dom";
import { emailBlack, phoneBlack, whatsapp } from "../../assets/images.js";
const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="contact-section">
          <div className="contact-section__email">
            <img
              className="contact-section__email__icon"
              src={emailBlack}
              alt=""
            />
            <a href=" ">info@amparoinsurance.com</a>
          </div>
          <div className="contact-section__phone">
            <img
              className="contact-section__phone__icon"
              src={phoneBlack}
              alt=""
            />
            <a href=" ">(866) 746-1554 </a>
          </div>
          <div className="contact-section__whatsapp">
            <img
              className="contact-section__whatsapp__icon"
              src={whatsapp}
              alt=""
            />
            <a href=" ">AmparoInsurance</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
