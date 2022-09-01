import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { cross } from "../../assets/images.js";
const CustomerCenter = ({ setCustomerCenterDisplay }) => {
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
              <h4>Register Your vehicle</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4>File a Claim</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4>Adjust Your Policy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4>Get Proof of Insurance</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4>Make a Payment</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
            <div className="customer-center__left-section__contents">
              <h4>How can we help you?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ...
              </p>
            </div>
          </div>
          <div className="customer-center__right-section">
            <h4> Adjust Your Policy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Consectetur adipiscing elit, sed do eiusmod Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor. Consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCenter;
