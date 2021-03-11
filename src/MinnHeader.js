import React, { useRef, useEffect } from "react";
import "./MinnHeader.css";

const MinnHeader = () => {
  const minnBgRef = useRef(null);

  const minnbgScroll = () => {
    if (
      window.location.href === "https://hlane.netlify.app/minneapolis" ||
      window.location.href === "https://hlane.netlify.app/minneapolis/"
    ) {
      if (window.scrollY > 500) {
        minnBgRef.current.classList.add("minnbgscroll");
      } else if (window.scrollY < 500) {
        minnBgRef.current.classList.remove("minnbgscroll");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", minnbgScroll);

    return () => {
      window.removeEventListener("scroll", minnbgScroll);
    };
  });

  return (
    <>
      <header className="minneapolis-header" ref={minnBgRef}>
        <img src="hannahimages\minnbg.jpeg" alt="" className="minnbg" />
        <div className="minnheader-bg-cover"></div>
      </header>
    </>
  );
};

export default MinnHeader;
