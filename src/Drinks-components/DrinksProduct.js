import React, {useState, useRef, useEffect} from "react";
import { FaHeart } from "react-icons/fa";
import "../Drinks-components/Drinks.css";

export default function DrinksProduct(props) {

  // ADD AND SUB BUTTONS AND PREVENTING CONTINOUS INCRE AND DECRE
  const [count, setCount] = useState(0);

  const add = () => {
    if(count < 10) {

      setCount(prevCount => prevCount + 1);
    }
  };
  const sub = () => {
  if(count <= 0) {
      return
    } else {

      setCount(prevCount => prevCount - 1);
    }
  };


  // SETTING WHEN TO SHOW PRODUCT AND FIXING SIDEEFFECTS
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

  //  SETTING THE ICON COLOR WHEN CLICK
   const [iconColor, setIconColor] = useState(false)
   const icontoggle = () => {
    setIconColor(prevSet => !prevSet)
   }

  //  ADD ORDERED PRODUCTS TO CART

  const addToCart = (e) => {
      e.preventDefault()

      const data = {

      }
  }

  return (
    <div className="product--section" ref={drinkRef}>
      <img
        src={props.OrderApp.brewImg}
        onClick={toggle}
        className="drink-img"
      />
      <div className="product-info" onClick={toggle}>
        {show && <img src={props.OrderApp.info} />}
      </div>
      <div className="product-info-container">
        <FaHeart
          style={{ color: iconColor ? "red" : "" }}
          onClick={icontoggle}
          className="heart-icon"
        />
        <div className="productName-container">
          <p>{props.OrderApp.productName}</p>
        </div>
        <div className="addsub-btn">
          <button onClick={sub}>
            <img src={props.OrderApp.subtract} />
          </button>
          <p>{count}</p>
          <button onClick={add}>
            <img src={props.OrderApp.add} />
          </button>
        </div>
        <div className="cartprice">
          <button onClick={addToCart}>
            <p>ORDER</p>
          </button>
          <p>{props.OrderApp.price}</p>
        </div>
      </div>
    </div>
  );
}