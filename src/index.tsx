import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";
import Server from "./Containers/Server";

export const server = createContext(new Server());

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
