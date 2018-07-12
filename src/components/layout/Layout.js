import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import '../../base/global.module.css';

const Layout = ({ children }) => {
 return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  ) 
};

export default Layout;