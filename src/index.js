import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
