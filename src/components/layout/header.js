import React from "react";
// import { Link } from "react-router-dom";
import {
  cloud,
  emailTop,
  phone,
  amparoLogo,
  dropdown,
} from "../../assets/images.js";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <header className="header">
          <div className="header-top">
            <div className="header-top__contents">
              <div className="header-top__contents__email">
                <img
                  className="header-top__contents__email__icon"
                  src={emailTop}
                  alt=""
                />
                <p>info@amparoinsurance.com</p>
              </div>
              <div className="header-top__contents__phone">
                <img
                  className="header-top__contents__email__icon"
                  src={phone}
                  alt=""
                />
                <p> (866) 746 -1554 </p>
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
              <div className="navigation__menu__home">
                <a href="# "> Home</a>
              </div>
              <div className="navigation__menu__get-a-quote">
                <a href=" #"> Get a Quote</a>
                <img src={dropdown} className="dropdown_icon" alt=""></img>{" "}
              </div>
              <div className="navigation__menu__about-us">
                <a href=" #"> About Us</a>
              </div>
              <div className="navigation__menu__insurance">
                <a href=" #"> Insurance Basics</a>
              </div>
              <div className="navigation__menu__customer-center">
                <a href=" #"> Customer Center</a>
                <img src={dropdown} className="dropdown_icon" alt=""></img>{" "}
              </div>
            </div>
          </div>
          <div className="get-a-quote">
            <button className="get-a-quote__button"> Get A Quote</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
