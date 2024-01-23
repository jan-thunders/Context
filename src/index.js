import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CricketerProvider from "./context/CricketerProvider";


ReactDOM.render(

<CricketerProvider>
  <App />
</CricketerProvider>
,

document.getElementById("root"))