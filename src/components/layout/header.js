import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  cloud,
  emailTop,
  phone,
  amparoLogo,
  dropdown,
} from "../../assets/images.js";
import CustomerCenter from "./customerCenter.js";
import GetAQuoteForm from "./getAQuoteForm.js";
import HeaderForMobileView from "./headerForMobileView.js";
const Header = ({ setDisplayInfoContainer }) => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [customerCenterDisplay, setCustomerCenterDisplay] = useState(false);
  const [getAQuoteButtonDisplay, setGetAQuoteDisplay] = useState(true);

  return (
    <>
      <div className="header-container">
        <HeaderForMobileView
          setFormDisplay={setFormDisplay}
          setCustomerCenterDisplay={setCustomerCenterDisplay}
          setDisplayInfoContainer={setDisplayInfoContainer}
        />
        <header className="header">
          <div className="header-top">
            <div className="header-top__contents">
              <div className="header-top__contents__email">
                <img
                  className="header-top__contents__email__icon"
                  src={emailTop}
                  alt=""
                />
                <a href="# ">info@amparoinsurance.com</a>
              </div>
              <div className="header-top__contents__phone">
                <img
                  className="header-top__contents__email__icon"
                  src={phone}
                  alt=""
                />
                <a href="# "> (866) 746 -1554 </a>
              </div>
              <div className="header-top__contents__language">
                <a href=" "> Portuguese</a>
                <a href=" "> English</a>
                <a href=" "> Spanish</a>
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="navigation__logo">
              <img src={amparoLogo} alt=" "></img>
            </div>
            <div className="navigation__menu">
              <div className="navigation__menu__home active-menu">
                <a
                  href="# "
                  onClick={() => {
                    setFormDisplay(false);
                    setCustomerCenterDisplay(false);
                  }}
                >
                  {" "}
                  Home
                </a>
              </div>
              <div className="navigation__menu__get-a-quote ">
                <a
                  href=" #"
                  onClick={() => {
                    setFormDisplay(true);
                    setCustomerCenterDisplay(false);
                    setGetAQuoteDisplay(false);
                  }}
                >
                  {" "}
                  Get a Quote
                </a>
                <img src={dropdown} className="dropdown_icon" alt=""></img>{" "}
              </div>
              <div className="navigation__menu__about-us  nav">
                <a
                  href=" #"
                  onClick={() => {
                    setFormDisplay(false);
                    setCustomerCenterDisplay(false);
                  }}
                >
                  {" "}
                  About Us
                </a>
              </div>
              <div className="navigation__menu__insurance  nav">
                <a
                  href=" #"
                  onClick={() => {
                    setFormDisplay(false);
                    setCustomerCenterDisplay(false);
                  }}
                >
                  {" "}
                  Insurance Basics
                </a>
              </div>
              <div className="navigation__menu__customer-center nav">
                <a
                  href=" #"
                  onClick={() => {
                    setFormDisplay(false);
                    setCustomerCenterDisplay(true);
                    setGetAQuoteDisplay(false);
                  }}
                >
                  {" "}
                  Customer Center
                </a>
                <img src={dropdown} className="dropdown_icon" alt=""></img>{" "}
              </div>
            </div>
          </div>
        </header>

        {formDisplay ? <GetAQuoteForm setFormDisplay={setFormDisplay} /> : ""}
        {customerCenterDisplay ? (
          <CustomerCenter setCustomerCenterDisplay={setCustomerCenterDisplay} />
        ) : (
          ""
        )}
        {!formDisplay && !customerCenterDisplay ? (
          <div className="get-a-quote">
            <button
              className="get-a-quote__button"
              onClick={() => setFormDisplay(true)}
            >
              {" "}
              Get A Quote
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
