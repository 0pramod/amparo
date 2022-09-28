import React from "react";
// import { Link } from "react-router-dom";
import { amparoLogoBig } from "../../assets/images.js";
const Info = () => {
  return (
    <>
      <div className="information-container">
        <div className="information-container__logo">
          <p className="information-container__logo__text"> Why</p>
          <img src={amparoLogoBig} alt="# "></img>
        </div>
        <div className="information-container__info">
          <ul>
            <li>
              <h4>1. We believe in you.</h4>
              <p>
                {" "}
                Amparo grants full credit for driving experience on
                international licenses
              </p>
            </li>
            <li>
              <h4>2. Customize your policy for a lower premium. </h4>
              <p>
                We don’t use boiler-plate limits or deductibles that increase
                your premium. Instead, we work with you to determine a level of
                coverage that makes sense for you, at a price that makes sense
                for you
              </p>
            </li>
            <li>
              <h4>3. The quote you receive at binding will not change.</h4>
              <p>
                {" "}
                Other insurance companies may promise you one premium and then
                increase it the next month if you don’t submit a lot of
                verifying documents. At Amparo, the premium you receive at
                binding is the premium you will pay over the life of your
                policy—period. Amparo is a managing general agency, with
                underwriters working for us, so there is no delayed approval
                process that is often required at other agencies. Your policy
                will only change if you ask us to.{" "}
              </p>
            </li>
            <li>
              <h4>4. We’re here to help—beyond insurance.</h4>
              <p>
                {" "}
                Amparo is here to demystify the complicated process of buying
                insurance, especially for those purchasing a vehicle. We can
                help you register your vehicle, obtain proof of insurance, and
                deal with any other RMV or dealership issues. Our agents are
                also here to explain in simple language exactly what you’re
                signing up for with each line of coverage. Check out our
                Insurance <a href="#"> 101 page</a> or call an Amparo
                representative today.
              </p>
            </li>
          </ul>
          <div className="informtion-container__info__details"></div>
          <div className="informtion-container__info__details"></div>
          <div className="informtion-container__info__details"> </div>
          <div className="informtion-container__info__details"> </div>
        </div>
      </div>
    </>
  );
};

export default Info;
