import React from "react";
import { FaHeart } from "react-icons/fa";
import "../Pastries-components/pastries.css";

export default function CakesProduct(props) {
  return (
    <div className="cakes-container">
      <img src={props.pastry.product} />
      <div className="pastry-section">
        <FaHeart className="pastry-heart-icon" />
        <p>{props.pastry.pastryName}</p>
        <div className="pastry-btn">
          <button>
            <img src={props.pastry.subtract} />
          </button>
          <p>0</p>
          <button>
            <img src={props.pastry.add} />
          </button>
        </div>
        <div className="pastry-cartprice">
          <button>
            <p>ORDER</p>
          </button>
          <p>{props.pastry.price}</p>
        </div>
      </div>
    </div>
  );
}
