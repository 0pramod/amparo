import React from "react";
// import LeftContainer from "./leftContainer";
// import MainContainer from "./mainContainer";
// import RightContainer from "./rightContainer";
import Header from "../layout/header";
// import { Link } from "react-router-dom";
import { cloud, city, background } from "../../assets/images.js";
import Footer from "../layout/footer";
import Contacts from "../layout/contacts";
import Info from "../layout/Info";
import GetAQuoteForm from "../layout/getAQuoteForm";
import TopContent from "../layout/topContent";
const Home = () => {
  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="top-section">
          <Header />
          <TopContent />

          {/* <img className="city" src={background}></img> */}
        </div>
      </div>
      <Info />
      <Contacts />
      <GetAQuoteForm />
      <Footer />
    </div>
  );
};

export default Home;
