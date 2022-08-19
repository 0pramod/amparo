import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";

/**
 * App Router.
 */
function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* <Route path="/assignment" component={Assignment} /> */}
    </Router>
  );
}
export default AppRouter;
