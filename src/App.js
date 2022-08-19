import React from "react";
import { IconContext } from "react-icons";
import "./assets/sass/style.scss";
import "./assets/images.js";
import Router from "./routes";

const IconDefaultParams = {
  size: "16px",
};

const App = () => {
  return (
    <IconContext.Provider value={IconDefaultParams}>
      <Router />
    </IconContext.Provider>
  );
};

export default App;
