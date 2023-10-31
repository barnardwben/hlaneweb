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
              {/* <img
                src="https://www.mplsrealtor.com/wp-content/themes/maar/images/logo.png"
                alt="Minneapolis Area Realtors Logo"
                className="MARL"
              /> */}
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
                <i className="fab fa-facebook-square social-links"></i>
                <i className="fab fa-linkedin social-links"></i>
              </div>
            </div>
            <div className="footer-right-grid">
              <div className="verve-container">
                <img
                  src="hannahimages\Verve Logo.png"
                  alt="Verve Realty Logo"
                  className="verve-logo"
                />
                <p className="partnered">
                  Partnered with Verve Realty Brokerage
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-section">
          <p className="creator-para">
            Website Created by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.benjamin-barnard.com/"
              className="website-creator"
            >
              Benjamin Barnard
            </a>
            , © 2021
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
