import React from "react";
import "./ContactBanner.css";
const ContactBanner = () => {
  return (
    <>
      <section className="hmain-section-four">
        <div>
          <h3 className="secfour-contact">Contact</h3>
          <div>
            <a
              href="mailto: Hannah@VerveRealty.com"
              className="email-link splitup"
            >
              Hannah@VerveRealty.com
            </a>
            <a className="telephone-num splitup" href="tel:651-497-1074">
              <i className="fas fa-mobile-alt"></i>
              (651)-497-1074
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
