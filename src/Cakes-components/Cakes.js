import React, { useState, useEffect, useRef } from "react";
import cakesData from "../Data/cakesData";
import "../Cakes-components/Cakes.css"
import CakesProduct from "./CakesProduct";


export default function Cakes() {
  const [show, setShow] = useState();
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  let cakeRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!cakeRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });

  const pastry = cakesData.map((pastry) => {
    return (
      <div>
            {show && <CakesProduct pastry={pastry} />}
      </div>
    
    );
  });
  return (
    <div className="cakes--container">
      <div className="cakesMain--container" ref={cakeRef}>
        <div className="cakesbtn-container">
          <img
            src="./cakes-images/CAKES.png.webp"
            className="cakes-section-img"
            onClick={toggle}
          />
       
        </div>
        <div className="products-section-wrapper">
          <div className="cakes-info-container">{pastry}</div>
        </div>
      </div>
    </div>
  );
}
