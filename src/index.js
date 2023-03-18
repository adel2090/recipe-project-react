
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import toasify
import "react-toastify/dist/ReactToastify.css";
// // axios
import axios from "axios";
import { config } from "@fortawesome/fontawesome-svg-core";

import "./styles/index.scss";
/**config axios */
//axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.baseURL = `${process.env.REACT_APP_DOMAIN}/api`;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
