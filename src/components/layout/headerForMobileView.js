import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  amparoLogoSmall,
  carAndTruck,
  cross,
  hamburger,
} from "../../assets/images.js";
const HeaderForMobileView = ({
  setFormDisplay,
  setCustomerCenterDisplay,
  setDisplayInfoContainer,
}) => {
  const [displayNavigation, setDisplayNavigation] = useState(false);
  const [displayHeader, setDisplayHeader] = useState(true);
  return (
    <>
      {" "}
      {displayHeader ? (
        <header className="header-for-mobile-view">
          <div className="hamburger-menu">
            <img
              src={hamburger}
              alt="icon"
              onClick={() => {
                setDisplayNavigation(!displayNavigation);
                setDisplayHeader(false);
              }}
            />
          </div>
          <div className="amparo-logo-small">
            <img src={amparoLogoSmall} alt="icon" />
          </div>
          <div className="car-and-truck">
            <img src={carAndTruck} alt="icon" />
          </div>
        </header>
      ) : (
        ""
      )}
      {displayNavigation ? (
        <>
          {" "}
          <div className="navigation-pop-up">
            <header className="header-for-mobile-view">
              <div className="hamburger-menu">
                <img
                  src={cross}
                  alt="icon"
                  onClick={() => {
                    setDisplayNavigation(!displayNavigation);
                    setDisplayHeader(true);
                  }}
                />
              </div>
              <div className="amparo-logo-small">
                <img src={amparoLogoSmall} alt="icon" />
              </div>
              <div className="car-and-truck">
                <img src={carAndTruck} alt="icon" />
              </div>
            </header>
            <div className="navigation-menu-mobile">
              <div className="navigation-menu-mobile__menu"> Home</div>
              <div
                className="navigation-menu-mobile__menu"
                onClick={() => {
                  setFormDisplay(true);
                  setDisplayNavigation(false);
                  setDisplayInfoContainer(false);
                  setDisplayHeader(true);
                }}
              >
                Get a Quote
              </div>
              <div className="navigation-menu-mobile__menu"> About Us</div>
              <div className="navigation-menu-mobile__menu">
                {" "}
                Insurance Basics
              </div>
              <div
                className="navigation-menu-mobile__menu"
                onClick={() => {
                  setCustomerCenterDisplay(true);
                  setDisplayNavigation(false);
                  setDisplayInfoContainer(false);
                  setDisplayHeader(true);
                }}
              >
                customer Center
              </div>
              <div className="navigation-menu-mobile__footer"></div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderForMobileView;
