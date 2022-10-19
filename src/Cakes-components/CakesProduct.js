import React, {useState} from "react";
import { FaHeart } from "react-icons/fa";
import "../Cakes-components/Cakes.css";

export default function CakesProduct(props) {
  // ADD AND SUB BUTTONS
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const sub = () => {
    if (count <= 0) {
      return;
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  //  SETTING THE ICON COLOR WHEN CLICK
  const [iconColor, setIconColor] = useState(false);
  const icontoggle = () => {
    setIconColor((prevSet) => !prevSet);
  };
  return (
    <div className="product--section">
      <img src={props.pastry.product} id="cake-img" />
      <div className="product-info-container">
        <FaHeart
          style={{ color: iconColor ? "red" : "" }}
          onClick={icontoggle}
          className="heart-icon"
        />
        <div className="productName-container">
          <p>{props.pastry.pastryName}</p>
        </div>
        <div className="addsub-btn">
          <button onClick={sub}>
            <img src={props.pastry.subtract} />
          </button>
          <p>{count}</p>
          <button onClick={add}>
            <img src={props.pastry.add} />
          </button>
        </div>
        <div className="cartprice">
          <button>
            <p>ORDER</p>
          </button>
          <p>{props.pastry.price}</p>
        </div>
      </div>
    </div>
  );
}
