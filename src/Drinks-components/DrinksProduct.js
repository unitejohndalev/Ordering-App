import React, { useState, useRef, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "../Drinks-components/Drinks.css";
// import Cart from "../Cart-components/Cart";


// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function DrinksProduct(props) {
  
  
  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());
  const [productName, setProductName] = useState(props.OrderApp.productName)
  
  
  
  // ADD AND SUB BUTTONS AND PREVENTING CONTINOUS INCRE AND DECRE
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
  const [iconColor, setIconColor] = useState(false);
  const icontoggle = () => {
    setIconColor((prevSet) => !prevSet);
  };

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
     count,
     productName
    };
    setbooks([...books, book]);
    setCount();
    setProductName()
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

 

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
          <button onClick={handleAddBookSubmit}>
            <p>ORDER</p>
          </button>
          <p>${props.OrderApp.price}</p>
        </div>
      </div>
  
    </div>
  );
}
