import React, { useState } from "react";

import Header from "../layout/header";
// import { Link } from "react-router-dom";
import { cloud, city, background } from "../../assets/images.js";
import Footer from "../layout/footer";
import Contacts from "../layout/contacts";
import Info from "../layout/Info";
import GetAQuoteForm from "../layout/getAQuoteForm";
import TopContent from "../layout/topContent";
import CustomerCenter from "../layout/customerCenter";
import Carousel from "../layout/carousel";
import Carousel2 from "../layout/carousel2";
const Home = () => {
  const [displayInfoContainer, setDisplayInfoContainer] = useState(true);
  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="top-section">
          <Header setDisplayInfoContainer={setDisplayInfoContainer} />
          <TopContent />
        </div>
      </div>
      {/* <Carousel2 /> */}
      <Carousel />
      <Info />
      <Contacts />
      {/* <CustomerCenter /> */}
      <Footer />
    </div>
  );
};

export default Home;
