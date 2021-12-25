import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import Screens from "./screens";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Screens />
  </BrowserRouter>,
  rootElement
);
