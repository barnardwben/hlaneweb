import React, { useRef, useEffect } from "react";
import "./AboutMain.css";
import ContactBanner from "./ContactBanner";
const AboutMain = () => {
  const hannahImgRef = useRef(null);

  const hannahScroll = () => {
    if (window.location.href === "http://localhost:3000/about") {
      if (window.scrollY > document.querySelector("main").offsetHeight - 1020) {
        console.log(document.querySelector("main").offsetHeight);
        hannahImgRef.current.classList.add("stickthree");
      } else if (
        window.scrollY <
        document.querySelector("main").offsetHeight - 1020
      ) {
        hannahImgRef.current.classList.remove("stickthree");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hannahScroll);
    return () => {
      window.removeEventListener("scroll", hannahScroll);
    };
  }, []);

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
                src="hannahimages\abouthanbw.png"
                alt="Hannah Lane Realtor"
                className="abouthan"
                ref={hannahImgRef}
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

{
  /* <div className="left-grid-one">
            <p className="about-main-paras">
              Hannah Lane grew up in Highland Park and has resided in Saint
              Paul. She has an in-depth knowledge of the Twin Cities and what it
              has to offer its residents and community. Real Estate experience
              includes working for Marketplace Commercial assisting with
              leasing, sales, and property management. Hannah has also worked in
              the hospitality and customer service industry for over ten years
              and loves helping others. Her love for architecture, planning,
              management, and supporting people has led her back to Residential
              Real Estate. Hannah will assist you in the whole process, from
              saving for a down payment to closing the sale. Her main goal is to
              make the process smooth for all parties involved, and to educate
              the client to her greatest ability. Her attention to detail and
              hard work ethic should provide comfort during a process that can
              be extremely overwhelming.
            </p>
          </div>
          <div className="right-grid-one">
            <img
              src="hannahimages\Hanah Lane Linkedin.jpg"
              alt="Hannah Lane Saint Paul Minneapolis Realtor"
              className="hannah-image"
            />
          </div>
          <div className="left-grid-two">
            <p className="about-main-paras"></p>
          </div>
          <div className="right-grid-two">
            <p className="about-main-paras"></p>
          </div> */
}

// HANNAH LANE
// Realtor®
// Hannah@VerveRealty.com
// (651) 497-1074
//

// Services Offered
// Home Listing | Buyer Representation | Relocation

// Education & Training
// Augsburg College

// Bachelor of Science in Business Management

// Minor: Business Marketing

// Affiliations & Accreditations
// Licensed Sales Agent – State of MN
// National Association of Realtors (NAR)
// Minneapolis Area Realtors (MAR)

// Hobbies & Interests
// Hannah is extremely devoted to her family and friends. She  enjoys spending her free time with her nieces, snowboarding, being outside as much as possible, and trying new restaurants. Traveling is her passion and motivation, she enjoys the simple things in life.

// I believe that everything boils down to the human connection and
//               in everything I do, I honor these relationships. I do this through
//               honest communication, removing unknowns, and constant growth to
//               benefit my clients. Helping people to buy or sell their home is
//               the way I get to fulfill my passion of genuine connection! I
//               prioritize your underlying goals with a direct, hands-on approach.
//               My relationships with clients last long after the close of the
//               sale, and it is that underlying philosophy that drives my worth
//               ethic and the success of my business. I bim to bridge the gap
//               between Real Estate and Wellness for my buyers and sellers in San
//               Francisco and Marin. My background in Nutrition & Functional
//               Medicine has taught me there are many underlying similarities.
//               Identifying the root cause or goal is the way to move forward
//               successfully. I help my clients to identify their underlying goals
//               for buying or selling, and diligently manage the process from
//               start to finish, so you can remain clear-headed, healthy, and
//               well. Shbuld we work together? If this speaks to you, give me a
//               call or send me a note. I look forward to hearing from you! In the
//               meantime, I invite you to explore San Francisco and Marin market
//               insights and read about some of my favorite topics on the blog:
//               Nutrition + Neighborhoods. Follow along on Instagram to see
//               beautiful property and nutritious finds across San Francisco,
//               Marin, and the globe.
