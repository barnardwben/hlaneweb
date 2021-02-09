import React from "react";
import "./HomeMain.css";
const HomeMain = () => {
  return (
    <>
      <main className="home-main">
        <h2 className="home-main-header">
          Going beyond the standard of excellence to offer you unparrelled
          results
        </h2>
        <hr className="hmh-hr" />
        <section className="hmain-section-one">
          <div className="left-grid-one">
            <p className="home-main-paras">
              I believe that everything boils down to the human connection and
              in everything I do, I honor these relationships. I do this through
              honest communication, removing unknowns, and constant growth to
              benefit my clients. Helping people to buy or sell their home is
              the way I get to fulfill my passion of genuine connection! I
              prioritize your underlying goals with a direct, hands-on approach.
              My relationships with clients last long after the close of the
              sale, and it is that underlying philosophy that drives my worth
              ethic and the success of my business.
            </p>
          </div>
          <div className="right-grid-one">
            <img
              src="https://ververealty.com/wp-content/uploads/2021/01/Hanah-Lane-300x224-1.jpg"
              alt="Hannah Lane Saint Paul Minneapolis Realtor Image"
              className="hannah-image"
            />
          </div>
          <div className="left-grid-two">
            <p className="home-main-paras">
              I bim to bridge the gap between Real Estate and Wellness for my
              buyers and sellers in San Francisco and Marin. My background in
              Nutrition & Functional Medicine has taught me there are many
              underlying similarities. Identifying the root cause or goal is the
              way to move forward successfully. I help my clients to identify
              their underlying goals for buying or selling, and diligently
              manage the process from start to finish, so you can remain
              clear-headed, healthy, and well.
            </p>
          </div>
          <div className="right-grid-two">
            <p className="home-main-paras">
              Shbuld we work together? If this speaks to you, give me a call or
              send me a note. I look forward to hearing from you! In the
              meantime, I invite you to explore San Francisco and Marin market
              insights and read about some of my favorite topics on the blog:
              Nutrition + Neighborhoods. Follow along on Instagram to see
              beautiful property and nutritious finds across San Francisco,
              Marin, and the globe.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeMain;
