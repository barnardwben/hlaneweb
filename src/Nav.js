import React, { useEffect, useRef } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navScroll = () => {
    if (window.scrollY > 10) {
      navRef.current.classList.add("navscroll");
      logoRef.current.style.width = "7rem";
    } else if (window.scrollY < 10) {
      navRef.current.classList.remove("navscroll");
      logoRef.current.style.width = "10rem";
    }
  };

  const removeMenu = () => {
    hamburgerRef.current.classList.add("nav-res-hide");
  };

  const menuToggler = () => {
    hamburgerRef.current.classList.toggle("nav-res-hide");
  };

  const checkWindowSize = () => {
    if (window.innerWidth > 920) {
      hamburgerRef.current.classList.add("nav-res-hide");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    window.addEventListener("resize", checkWindowSize);
    document
      .querySelector(".hamburger-menu")
      .addEventListener("click", menuToggler);
    return () => {
      window.removeEventListener("scroll", navScroll);
      window.removeEventListener("resize", checkWindowSize);
      document
        .querySelector(".hamburger-menu")
        .removeEventListener("click", menuToggler);
    };
  });

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="nav-link-container">
          <Link to="/">
            <img
              src="\hllogo.png"
              alt="Hannah Lane Realtor Logo"
              ref={logoRef}
              className="hlane-logo"
            />
          </Link>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <div>
            <NavLink
              to="/minneapolis"
              className="nav-link"
              activeClassName="active"
            >
              Minneapolis
            </NavLink>
            <NavLink
              to="/st.paul"
              className="nav-link"
              activeClassName="active"
            >
              St.Paul
            </NavLink>
          </div>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="telephone-container nav-tele">
          <a className="telephone-num nav-tele" href="tel:651-497-1074">
            <i className="fas fa-mobile-alt"></i>
            (651)-497-1074
          </a>
        </div>
        <div className="hamburger-menu">
          <i className="fas fa-bars hamburger"></i>
        </div>
        <div className="reponsive-nav-menu nav-res-hide" ref={hamburgerRef}>
          <NavLink
            exact
            to="/"
            className="nav-link-res"
            activeClassName="active"
            onClick={() => removeMenu()}
          >
            <p className="nav-p">Home</p>
          </NavLink>
          <NavLink
            to="/minneapolis"
            className="nav-link-res"
            activeClassName="active"
            onClick={() => removeMenu()}
          >
            <p className="nav-p">Minneapolis</p>
          </NavLink>
          <NavLink
            to="/st.paul"
            className="nav-link-res"
            activeClassName="active"
            onClick={() => removeMenu()}
          >
            <p className="nav-p">St. Paul</p>
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link-res"
            activeClassName="active"
            onClick={() => removeMenu()}
          >
            <p className="nav-p">About</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
