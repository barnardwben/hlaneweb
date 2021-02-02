import React, { useRef } from "react";
import "./Nav.css";

const Nav = () => {
  if (window.scrollY > 10) {
    document.querySelector(".navbar").style.height = "500px";
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-link-container">
          <a href="#">
            <img
              src="\hllogo.png"
              alt="Hannah Lane Realtor Logo"
              className="hlane-logo"
            />
          </a>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
        <div className="telephone-container">
          <a className="telephone-num" href="tel:651-497-1074">
            <i className="fas fa-mobile-alt"></i>
            (651)-497-1074
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
