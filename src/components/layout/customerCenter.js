import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { cross } from "../../assets/images.js";
const CustomerCenter = ({ setCustomerCenterDisplay }) => {
  const [headerForRightContainer, setHeaderForRightContainer] = useState(
    "Register Your Veichele"
  );
  const [contentForRightContainer, setContentForRightContainer] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
  );
  return (
    <>
      {" "}
      <div className="form-container">
        <div className="form-container__header">
          <div className="form-container__header__text">
            <h4>Need Some Help?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              elementum{" "}
            </p>
          </div>
          <button
            className="close-button"
            onClick={() => setCustomerCenterDisplay(false)}
          >
            {" "}
            <img src={cross} alt=" #" />
          </button>
        </div>

        <div className="customer-center">
          <div className="customer-center__left-section">
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("Register Your vehicle");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                Register Your vehicle
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("File a Claim");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                File a Claim
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("Adjust Your Policy");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                Adjust Your Policy
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("Get Proof of Insurance");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                Get Proof of Insurance
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("Make a Payment");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                Make a Payment
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4
                onClick={() => {
                  setHeaderForRightContainer("How can we help you?");
                  setContentForRightContainer(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor "
                  );
                }}
              >
                How can we help you?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
          </div>
          <div className="customer-center__right-section">
            <h4> {headerForRightContainer}</h4>
            <p>{contentForRightContainer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCenter;
