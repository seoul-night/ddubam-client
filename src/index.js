import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <GlobalStyle /> */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
  // </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();
