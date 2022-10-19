import React, { useState, useEffect, useRef } from "react";
import pastriesData from "../Data/pastriesData";
import PastriesProduct from "./PastriesProduct";
import "../Pastries-components/pastries.css";

export default function Pastries() {
  const [show, setShow] = useState();
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  let pastryRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!pastryRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });

  const pastry = pastriesData.map((pastry, pastries) => {
    return (
      <div className="pastries--container">
        <PastriesProduct pastry={pastry} key={pastries} />
      </div>
    );
  });
  return (
    <div className="pastry-wrapper">
      <div className="pastries--container" ref={pastryRef}>
        <div className="pastriesMain--container">
          <div className="pastriesbtn-container">
            <img
              src="./pastries-images/pastrybg.webp"
              className="pastries-section-img"
              onClick={toggle}
            />
          </div>
          <div className="products-section-wrapper">
            {show && <div className="pastries-container">{pastry}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
