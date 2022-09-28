import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { asterisk, cross } from "../../assets/images.js";

const GetAQuoteForm = ({ setFormDisplay }) => {
  // const [formDisplay, setFormDisplay] = useState(false);
  return (
    <>
      <div className="form-container">
        <div className="form-container__header">
          <div className="form-container__header__text">
            <h4>Arrange a call with a Representative</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              elementum{" "}
            </p>
          </div>
          <button
            className="close-button"
            onClick={() => setFormDisplay(false)}
          >
            {" "}
            <img src={cross} alt=" #" />
          </button>
        </div>

        <form className="get-a-quote-form">
          <div>
            <label for="fname">First Name</label>
            <br></br>
            <input type="text" id="fname" name="fname" value="" />
          </div>

          <div>
            <label for="lname">Last Name</label>
            <br></br>
            <input type="text" id="lname" name="lname" value="" />
          </div>
          <div>
            <label for="phone">
              Phone <img src={asterisk} className="required-icon"></img>
            </label>
            <br></br>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="xxxxxxxxxxx"
              value=""
            />
          </div>
          <div>
            <label for="state">
              State <img src={asterisk} className="required-icon"></img>
            </label>
            <br></br>
            <input type="text" id="state" name="state" value="" />
          </div>
          <div>
            <label for="best-time-to-call">
              Best Time To Call{" "}
              <img src={asterisk} className="required-icon"></img>
            </label>
            <br></br>
            <input type="date" id="date" name="best-time-to-call" value="" />
          </div>
        </form>
        <div className="form-container__buttons">
          <button
            type="submit"
            className="form-container__buttons__no-thanks"
            onClick={() => setFormDisplay(false)}
          >
            {" "}
            No Thanks
          </button>
          <button className="form-container__buttons__get-a-quote">
            {" "}
            Get A Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default GetAQuoteForm;
