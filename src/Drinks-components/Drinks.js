import React, { useState, useRef, useEffect } from "react";
import OrderingAppData from "../Data/OrderingAppData";
import DrinksProduct from "./DrinksProduct";
import "../Drinks-components/Drinks.css";

export default function Drinks() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
    let drinksRef = useRef()
    useEffect(() => {
      document.addEventListener("mousedown", (e) => {
        if (!drinksRef.current.contains(e.target)) {
          setShow(false);
        }
      });
    });
  const OrderApp = OrderingAppData.map((OrderApp) => {
    return (
      <div className="drinks--container">
        <div className="drinks-container" ref={drinksRef}>
          <div className="btn-container" onClick={toggle}>
            <img
              src="./drink-images/drinkbg.png.webp"
              className="drinks-section"
            />
          </div>
        </div>
        {show && <DrinksProduct OrderApp={OrderApp} />}
      </div>
    );
  });
  return (
    <div className="drinksproduct-container">
      <div className="products-container">{OrderApp}</div>
    </div>
  );
}
