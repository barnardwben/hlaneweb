import React, { useState, useEffect } from "react";

const Locations = ({ items }) => {
  const [oneMapState, setOneMapState] = useState(false);

  const toggleDescription = () => {
    if (document.querySelector("main").offsetHeight < 2000) {
      setOneMapState(true);
    } else if (document.querySelector("main").offsetHeight > 2000) {
      setOneMapState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", toggleDescription);
    return () => {
      window.removeEventListener("click", toggleDescription);
    };
  }, []);

  return (
    <>
      {items.map((item) => {
        const { id, locationtitle, src, desc } = item;
        return (
          <>
            <div key={id} className="map-list-container">
              <h2 className="location-title">{locationtitle}</h2>
              <iframe src={src} title={src} width="580" height="350"></iframe>
              {oneMapState ? (
                <div className="desc-container">
                  <p className="desc-para">{desc}</p>
                </div>
              ) : (
                false
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Locations;
