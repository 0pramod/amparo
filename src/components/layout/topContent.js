import React from "react";
// import { Link } from "react-router-dom";
import { truck, car, signBoard, amparoBoard } from "../../assets/images.js";
const TopContent = () => {
  return (
    <>
      <div className="top-content">
        <div className="top-content__intro-text">
          Affordable, reliable insurance for your car, truck, or van. Call or
          send us a WhatsApp today for a quote in Portuguese, Spanish, or
          English.
        </div>
        <div className="top-content__images">
          <div className="top-content__images__truck">
            <img src={truck} alt=""></img>
          </div>
          <div className="top-content__images__board">
            <img src={amparoBoard} alt=""></img>
          </div>
          <div className="top-content__images__car">
            <img src={car} alt=""></img>
          </div>
        </div>

        <div className="top-content__road"></div>
      </div>
    </>
  );
};

export default TopContent;
