import React, { useRef, useEffect } from "react";
import "./StpHeader.css";

const StpHeader = () => {
  const minnBgRef = useRef(null);

  const minnbgScroll = () => {
    if (
      window.location.href === "https://hlane.netlify.app/st.paul" ||
      window.location.href === "https://hlane.netlify.app/st.paul/"
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
        <img src="hannahimages\stpbg.jpeg" alt="" className="minnbg" />
        <div className="minnheader-bg-cover"></div>
      </header>
    </>
  );
};

export default StpHeader;
