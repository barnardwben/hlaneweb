import React, { useState, useEffect } from "react";

const Locations = ({ items }) => {
  const [oneMapState, setOneMapState] = useState(false);

  const toggleDescription = () => {
    console.log(document.querySelector("main").offsetHeight);
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
              <iframe
                src={src}
                title={src}
                className={oneMapState ? "oneifrizzle" : "allifrizzle"}
              ></iframe>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Locations;
