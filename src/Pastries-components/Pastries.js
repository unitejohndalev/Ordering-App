import React, { useState, useEffect, useRef } from "react";
import pastriesData from "../Data/pastriesData";
import PastriesProduct from "./PastriesProduct";
import "../Pastries-components/pastries.css";
import "../OrderingUI/OrderingApp.css";



export default function Pastries() {
  const [show, setShow] = useState(false);
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

  const pastry = pastriesData.map((pastry) => {
    return (
   
        <div className="pastries--container">
          <div className="pastriesMain--container" ref={pastryRef}>
            <div className="pastriesMain-container" onClick={toggle}>
              <img src="./pastries-images/pastrybg.webp" className='pastries-section-img'/>
            </div>
          </div>
          {show && <PastriesProduct pastry={pastry} />}
        </div>

    );
  });
  return (
    <div className="pastriesproduct-container">
      <div className="pastries-product-container">{pastry}</div>
    </div>
  );
}
