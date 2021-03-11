import React, { useState } from "react";
import "./StpMain.css";
import StpLocationsTitles from "./StpLocationsTitles";
import Locations from "./Locations";
import ContactBanner from "./ContactBanner";
import stpdata from "./stpdata";

const allLocations = [
  "All",
  ...new Set(stpdata.map((mdata) => mdata.locationtitle)),
];

const StpMain = () => {
  const [locationList, setLocationList] = useState(stpdata);
  const [locations, setLocation] = useState(allLocations);

  const hideOnClickStp = () => {
    document
      .querySelector(".locations-container")
      .classList.add("hidelocations");
    setTimeout(() => {
      document
        .querySelector(".locations-container")
        .classList.add("displayNada");
    }, 400);
  };

  const filterLocations = (location) => {
    if (location === "All") {
      document.querySelector(".minnsec-one").classList.remove("minnsec-all");
      setLocationList(stpdata);
      hideOnClickStp();
      return;
    } else {
      document.querySelector(".minnsec-one").classList.add("minnsec-all");
      const newItems = stpdata.filter(
        (mdata) => mdata.locationtitle === location
      );
      setLocationList(newItems);
    }
    hideOnClickStp();
  };
  return (
    <main className="minnmain">
      <h2 className="minn-main-header">St. Paul</h2>
      <hr className="minnmh-hr" />
      <div className="minnmain-top-grid">
        <div className="dtwn-container"></div>

        <div className="dtwn-right-container">
          <div className="dtwn-right-content">
            <h3 className="dtwn-right-h3">St. Paul - </h3>
            <hr className="dtwn-hr" />
            <p className="dtwn-right-para">
              St. Paul, the capital of Minnesota, is home to a multitude of
              beautiful neighborhoods and is full of culture and opportunity.
              Its distinct seasons and natural beauty make Saint Paul one of the
              nations most pleasant cities to reside.
              <br />
              <br />
              What Saint Paul has to offer its residents is higher standards in
              quality of education, parks, well-maintained roadways and
              excellent healthcare, plus the lakes, trails, taverns and
              restaurants that comprise this gorgeous city.
            </p>
          </div>
        </div>
      </div>
      <StpLocationsTitles
        locations={locations}
        filterLocations={filterLocations}
      />
      <section className="minnsec-one">
        <Locations items={locationList} />
      </section>
      <ContactBanner />
    </main>
  );
};

export default StpMain;
