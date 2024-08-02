import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const children = props.children;
  return (
    /* what's React.Fragment? Google this */
    // What's an Outlet in React-Router-Dom? Google this too
    <React.Fragment>
      <Header>
        {/* This is because the home component has a child note (Banner) */}
        {children}
      </Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Layout;
