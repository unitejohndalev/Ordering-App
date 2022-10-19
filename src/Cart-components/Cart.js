import React, {useState} from "react";
import "../Cart-components/Cart.css";

function Cart() {

    const [show, setShow] = useState()
    const toggle = () => {
        setShow(prevShow => !prevShow)
    }

    const [gcash, setGcash] = useState()
    const gcashbtn = () => {
        setGcash(prevGcash => !prevGcash)
    }
  return (
    <div className="cart-container">
      <img
        src="./cart-images/el_shopping-cart-sign.png"
        id="cart"
        onClick={toggle}
      />
      {show && (
        <div className="cart-payment-container">
          <div className="orderslist-container"></div>
          <div className="paymentbtn-container">
            <button>CASH</button>
            <button onClick={gcashbtn}>G-CASH</button>
          </div>
          {gcash &&<div className="gcash-container">
            <img src="./gcash-images/barcode.png"/></div>}
        </div>
      )}
    </div>
  );
}

export default Cart;
