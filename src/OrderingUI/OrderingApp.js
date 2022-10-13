import React from "react";
import "../OrderingUI/OrderingApp.css";
import Drinks from '../Drinks-components/Drinks'
import Pastries from "../Pastries-components/Pastries";
import "../Drinks-components/Drinks.css";
import "../Pastries-components/pastries.css";
import Cakes from "../Cakes-components/Cakes";

export default function OrderingApp() {
  return (
    <div className="orderingApp-container">
      <nav><img src="./images/nav.png.webp"/></nav>
      <main className="main-container">
        <div className="img-container">
          <section className="orderingapp-container">
            <Drinks />
            <Pastries />
            <Cakes />
          </section>
 


        </div>
      </main>
      <footer><img src="./images/foot.png.webp"/></footer>
    </div>
  );
}
