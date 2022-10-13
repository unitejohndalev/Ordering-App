import React from "react";
import { FaHeart } from "react-icons/fa";
import "../Drinks-components/Drinks.css";


export default function DrinksProduct(props) {
    return (
      <div className="drink--section">
        <img src={props.OrderApp.blackbrew} />
        <div className="drink-section">
          <FaHeart className="heart-icon" />
          <p>Black Brew</p>
          <div className="addsub-btn">
            <button>
              <img src={props.OrderApp.subtract} />
            </button>
            <p>0</p>
            <button>
              <img src={props.OrderApp.add} />
            </button>
          </div>
          <div className="cartprice">
            <button>
              <p>ORDER</p>
            </button>
            <p>$4.00</p>
          </div>
        </div>
      </div>
    );
}