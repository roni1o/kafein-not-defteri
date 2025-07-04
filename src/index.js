import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import "./i18n"; // i18n importu

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
