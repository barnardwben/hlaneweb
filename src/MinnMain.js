import React, { useState } from "react";
import "./MinnMain.css";
import MinnLocationsTitles from "./MinnLocationsTitles";
import Locations from "./Locations";
import ContactBanner from "./ContactBanner";
import minneapolisdata from "./minneapolisdata";

const allLocations = [
  "All",
  ...new Set(minneapolisdata.map((mdata) => mdata.locationtitle)),
];

const MinnMain = () => {
  const [locationList, setLocationList] = useState(minneapolisdata);
  const [locations, setLocation] = useState(allLocations);

  console.log();

  const hideOnClick = () => {
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
      setLocationList(minneapolisdata);
      hideOnClick();
      return;
    } else {
      document.querySelector(".minnsec-one").classList.add("minnsec-all");
      const newItems = minneapolisdata.filter(
        (mdata) => mdata.locationtitle === location
      );
      setLocationList(newItems);
    }
    hideOnClick();
  };
  return (
    <main className="minnmain">
      <h2 className="minn-main-header">Minneapolis</h2>
      <hr className="minnmh-hr" />
      <div className="minnmain-top-grid">
        <div className="dtwn-container"></div>

        <div className="dtwn-right-container">
          <div className="dtwn-right-content">
            <h3 className="dtwn-right-h3">Minneapolis - </h3>
            <hr className="dtwn-hr" />
            <p className="dtwn-right-para">
              This gorgeous city famous for its artistic culture spans just
              under 58 mi² and lies on both banks of the Mississippi River. Its
              made up of diverse communities, all unique for their individual
              places of entertainment, varying landscapes, and historic
              architecture.
              <br />
              <br />
              Offering twelve districts, with a vast number of housing, condo,
              and loft locations ranging from modest dwellings to luxurious
              properties, Minneapolis is certain to meet the needs of anyone
              looking to relocate.
            </p>
          </div>
        </div>
      </div>
      <MinnLocationsTitles
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

export default MinnMain;
