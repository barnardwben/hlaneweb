import React, { useRef, useEffect } from "react";

const LocationTitles = ({ locations, filterLocations }) => {
  const arrowRef = useRef(null);
  const locationsRef = useRef(null);
  const handleChange = () => {
    if (
      window.location.href === "http://localhost:3000/minneapolis" ||
      window.location.href === "http://localhost:3000/minneapolis/" ||
      window.location.href === "http://localhost:3000/st.paul" ||
      window.location.href === "http://localhost:3000/st.paul/"
    ) {
      if (window.scrollY > document.querySelector("main").offsetHeight - 630) {
        arrowRef.current.classList.add("stick");
        locationsRef.current.classList.add("sticktwo");
      } else if (
        window.scrollY <
        document.querySelector("main").offsetHeight - 630
      ) {
        arrowRef.current.classList.remove("stick");
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
    window.addEventListener("scroll", handleChange);

    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  });

  return (
    <>
      <div
        className="open-locations"
        ref={arrowRef}
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
            {window.location.href === "http://localhost:3000/minneapolis"
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

export default LocationTitles;
