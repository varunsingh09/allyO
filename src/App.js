import React, { Fragment } from "react";
import Routes from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <Fragment>

      <div id="header"></div>
     
      <div id="main"><Routes /></div>
      <div id="footer">Footer</div>
    </Fragment>
  );
}

export default App;
