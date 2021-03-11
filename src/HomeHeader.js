import React, { useEffect, useRef } from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  const homeHeaderRef = useRef(null);

  const headerScroll = () => {
    if (window.location.href === "https://hlane.netlify.app/") {
      if (window.scrollY > 0) {
        document.querySelector(
          ".homeheader-bg"
        ).style.backgroundPositionY = `-${200 + window.scrollY / 5}px`;
      }
      if (window.scrollY > 1400) {
        homeHeaderRef.current.classList.add("headerscroll");
      } else if (window.scrollY < 1400) {
        homeHeaderRef.current.classList.remove("headerscroll");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  });

  return (
    <>
      <header className="homeheader-bg" ref={homeHeaderRef}>
        <div className="header-cover-layer">
          <div className="header-text-container">
            <h1 className="header-one">Life Changing Moves Made Easy</h1>
            <h2 className="header-two">Hannah Lane</h2>
            <p className="header-para">Twin Cities Realtor®</p>
          </div>
          <img
            src="hannahimages\comphanaone.png"
            alt="Hannah Lane Realtor"
            className="cutimagehannah"
          />
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
