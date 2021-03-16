import React, { useRef, useEffect } from "react";

const MinnLocationsTitles = ({ locations, filterLocations }) => {
  const minnarrowRef = useRef(null);
  const locationsRef = useRef(null);
  const handleMinnChange = () => {
    if (
      window.location.href === "https://hlane.netlify.app/minneapolis" ||
      window.location.href === "https://hlane.netlify.app/minneapolis/"
    ) {
      if (window.scrollY > document.querySelector("main").offsetHeight - 630) {
        minnarrowRef.current.classList.add("stick");
        locationsRef.current.classList.add("sticktwo");
      } else if (
        window.scrollY <
        document.querySelector("main").offsetHeight - 630
      ) {
        minnarrowRef.current.classList.remove("stick");
        locationsRef.current.classList.remove("sticktwo");
      }
    }
  };

  const hideLocations = () => {
    document
      .querySelector(".locations-container")
      .classList.add("hidelocations");
    setTimeout(() => {
      document
        .querySelector(".locations-container")
        .classList.add("displayNada");
    }, 400);
  };

  const showLocations = () => {
    document
      .querySelector(".locations-container")
      .classList.remove("hidelocations");
    document
      .querySelector(".locations-container")
      .classList.add("showlocations");
    setTimeout(() => {
      document
        .querySelector(".locations-container")
        .classList.remove("displayNada");
    }, 400);
  };

  useEffect(() => {
    if (
      window.location.href === "https://hlane.netlify.app/minneapolis" ||
      window.location.href === "https://hlane.netlify.app/minneapolis/"
    ) {
      window.addEventListener("scroll", handleMinnChange);
    }

    return () => {
      window.removeEventListener("scroll", handleMinnChange);
    };
  });

  return (
    <>
      <div
        className="open-locations"
        ref={minnarrowRef}
        onClick={() => showLocations()}
      >
        <i className="fas fa-directions"></i>
      </div>
      <div
        className="locations-container hidelocations displayNada"
        ref={locationsRef}
      >
        <div className="locations-selection">
          <span>
            {window.location.href === "https://hlane.netlify.app/minneapolis" ||
            window.location.href === "https://www.hlanerealtor.com/minneapolis"
              ? "Minneapolis Districts"
              : "St. Paul Districts"}
          </span>
          <span className="exit-btn" onClick={() => hideLocations()}>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
        <div className="locations-btn-container">
          {locations.map((locationtitle, index) => {
            return (
              <button
                className="location-btn"
                key={index}
                onClick={() => filterLocations(locationtitle)}
              >
                {locationtitle}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MinnLocationsTitles;
