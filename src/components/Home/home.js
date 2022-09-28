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

      <Info />
      <Contacts />
      {/* <CustomerCenter /> */}
      <Footer />
    </div>
  );
};

export default Home;
