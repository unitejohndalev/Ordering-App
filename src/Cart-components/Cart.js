import React, {useState} from "react";
import "../Cart-components/Cart.css";
import { CartOrders } from "./CartOrders";
import { reactLocalStorage } from "reactjs-localstorage";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function Cart() {

  const [books, setbooks] = useState(getDatafromLS());

  const [show, setShow] = useState();
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  const [gcash, setGcash] = useState();
  const gcashbtn = () => {
    setGcash((prevGcash) => !prevGcash);
  };
    // const datas = localStorage.getItem("productInfo");
    // const [productData, setProductData] = useState(datas);




  return (
    <div className="cart-container">
      <img
        src="./cart-images/el_shopping-cart-sign.png"
        id="cart"
        onClick={toggle}
      />
      {show && (
        <div className="cart-payment-container">
          <div className="orderslist-container">
            <CartOrders books={books} />
          </div>
          <div className="paymentbtn-container">
            <button>CASH</button>
            <button onClick={gcashbtn}>G-CASH</button>
          </div>
          {gcash && (
            <div className="gcash-container">
              <img src="./gcash-images/barcode.png" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
