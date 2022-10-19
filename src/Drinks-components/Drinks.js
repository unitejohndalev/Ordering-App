import React, { useState, useEffect, useRef } from "react";
import OrderingAppData from "../Data/OrderingAppData";
import DrinksProduct from "./DrinksProduct";

export default function Drinks() {
  const [show, setShow] = useState();
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  let drinkRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!drinkRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });



  const OrderApp = OrderingAppData.map((OrderApp, drinks) => {
    return (
      <div className="drinksproduct-wrapper">
        <DrinksProduct OrderApp={OrderApp} key={drinks} />
      </div>
    );
  });
  return (
    <div className="drinks-wrapper">
      <div className="drinks-container" ref={drinkRef}>
        <div className="btn-container">
          <img
            src="./drink-images/drinkbg.png.webp"
            className="drinks-section"
            onClick={toggle}
          />
        </div>
        <div className="products-section-wrapper">
          {show && <div className="products-container">{OrderApp}</div>}
        </div>
      </div>
    </div>
  );
}
