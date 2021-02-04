import React, { useEffect, useRef } from "react";
import "./Nav.css";

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);

  const navScroll = () => {
    if (window.scrollY > 10) {
      navRef.current.classList.add("navscroll");
      logoRef.current.style.width = "7rem";
    } else if (window.scrollY < 10) {
      navRef.current.classList.remove("navscroll");
      logoRef.current.style.width = "10rem";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="nav-link-container">
          <a href="#">
            <img
              src="\hllogo.png"
              alt="Hannah Lane Realtor Logo"
              ref={logoRef}
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
