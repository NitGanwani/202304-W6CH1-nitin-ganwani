import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import "./sass/styles.scss";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
