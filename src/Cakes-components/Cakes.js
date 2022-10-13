import React, { useState, useEffect, useRef } from "react";
import cakesData from "../Data/cakesData";
import CakesProduct from "./CakesProduct";
import "../Pastries-components/pastries.css";
import "../OrderingUI/OrderingApp.css";

export default function Pastries() {
  const [show, setShow] = useState(false);
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
      <div className="pastries--container">
        <div className="pastriesMain--container"ref={cakeRef}>
          <div className="cakesMain-container" onClick={toggle}>
            <img
              src="./cakes-images/CAKES.png.webp"
              className="cakes-section-img"
            />
          </div>
        </div>
        {show && <CakesProduct pastry={pastry} />}
      </div>
    );
  });
  return (
    <div className="cakesproduct-container">
      <div className="cakes-product-container">{pastry}</div>
    </div>
  );
}
