import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
import "./aos";
import Context from "./Context";

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Context>{props.children}</Context>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppWrapper;
