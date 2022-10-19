import React from "react";
import "../OrderingUI/OrderingApp.css";
import Drinks from "../Drinks-components/Drinks";
import Pastries from "../Pastries-components/Pastries";
import "../reusableCSS/reusable.css";
import Cakes from "../Cakes-components/Cakes";
import Cart from "../Cart-components/Cart";


export default function OrderingApp() {
  return (
    <div className="orderingApp-container">
      <nav>
        <img src="./images/nav.webp" />
      </nav>
        <Cart />
      <main className="main-container">
        <div className="img-container">
          <section>
            <div className="drinks-components">
              <Drinks />
            </div>
            <div className="pastries-components">
              <Pastries />
            </div>
            <div className="cakes-components">
              <Cakes />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <img src="./images/footer.webp" />
      </footer>
    </div>
  );
}
