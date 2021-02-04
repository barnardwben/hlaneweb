import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-top"></div>
      <footer>
        <div className="footer-top-layer">
          <div className="footer-grid-container">
            <div className="footer-left-grid">
              <img
                src="https://www.mplsrealtor.com/wp-content/themes/maar/images/logo.png"
                alt="Minneapolis Area Realtors Logo"
                className="MARL"
              />
              <img
                src="https://www.nar.realtor/sites/all/themes/gesso/images/nar-logo-2020.svg"
                alt="National Association of Realtors Logo"
                className="NAoRL"
              />
            </div>
            <div className="footer-center-grid">
              <img
                src="/hllogo.png"
                alt="Hannah Lane Realtor Logo"
                className="hlane-footer-logo"
              />
              <div className="social-links-container">
                <i class="fab fa-facebook-square social-links"></i>
                <i class="fab fa-linkedin social-links"></i>
              </div>
            </div>
            <div className="footer-right-grid"></div>
          </div>
        </div>
        <div className="creator-section">
          <p className="creator-para">
            Website Created by{" "}
            <a
              target="_blank"
              href="https://www.benjamin-barnard.com/"
              className="website-creator"
            >
              Benjamin Barnard
            </a>
            , © 2020
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
