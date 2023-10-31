import React, { useRef, useEffect, useState } from "react";
import "./AboutMain.css";
import ContactBanner from "./ContactBanner";
const AboutMain = () => {
  const hannahImgRef = useRef(null);
  const [isPositionFixed, setIsPositionFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsPositionFixed(false);
      } else {
        setIsPositionFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imagePosition = isPositionFixed ? "fixed" : "absolute";
  return (
    <>
      <main className="about-main">
        <section className="aboutmain-section-one">
          <div className="about-text">
            <h1 className="about-heading-one">Hannah Lane | Realtor®</h1>
            <p className="about-main-paras">
              It's my belief that success ultimately comes from the ability to
              connect with others, and so I encompass this belief with honest
              compassion for the people whose lives I have and will come to
              know. I strive to understand the wants and needs of each of my
              clients, as well as embody the power of motivation that is needed
              when their goals seem out of reach. It is in coming together with
              my clients and moving towards acheiving their goals of buying or
              selling their home that I am able to fulfill my passion for
              helping others.
              <br />
              <br />
              Being raised in Highland Park and having resided in Saint Paul,
              I've acquired in-depth knowledge of the Twin Cities and what it
              has to offer its residents and community. My Real Estate
              experience includes working for Marketplace Commercial assisting
              with leasing, sales, and property management. In addition to my
              success in Real Estate, I've worked in the hospitality and
              customer service industry for over ten years. My love for
              architecture, planning, management, and supporting people has led
              me to Residential Real Estate.
              <br /> <br /> I will assist you in the whole process, from saving
              for a down payment to closing the sale. It is my main goal to make
              the process smooth for all parties involved, and to educate the
              client to my greatest ability. With my attention to detail and
              hard work ethic, I will provide you with comfort and care during a
              process that can be extremely overwhelming. I encourage you to
              reach out by calling or sending an email and look forward to
              hearing from you! In the meantime, I invite you to explore the
              Twin Cities and its abundant selection within the market.
            </p>
            <h2 className="about-heading-one">Services Offered</h2>
            <p className="about-main-paras">
              Home Listing | Buyer Representation | Relocation
            </p>
            <h2 className="about-heading-one">Education & Training</h2>
            <p className="about-main-paras">
              Augsburg College <br />
              Bachelor of Science in Business Management <br /> Minor: Business
              Marketing
            </p>
            <h2 className="about-heading-one">Affiliations & Accreditations</h2>
            <p className="about-main-paras">
              Licensed Sales Agent – State of MN
              <br /> National Association of Realtors (NAR) <br /> Minneapolis
              Area Realtors (MAR)
            </p>
          </div>
          <div className="image-container">
            <div className="left-right">
              <div>
                <img src="" alt="" />
              </div>
              <img
                src="hannahimages\abouthannah.png"
                alt="Hannah Lane Realtor"
                className="abouthan"
                ref={hannahImgRef}
                style={{ position: imagePosition }}
              />
            </div>
            <div className="right-right">
              <div className="rrbgclr"></div>
            </div>
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  );
};

export default AboutMain;
