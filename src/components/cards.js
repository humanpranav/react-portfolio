import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import pic1 from "/Users/pranavarora/first/responsive/src/components/pexels-denafi-sy-786220.jpg";
import pic2 from "/Users/pranavarora/first/responsive/src/components/pexels-lascot-studio-1724173.jpg";
import pic3 from "/Users/pranavarora/first/responsive/src/components/pexels-pixabay-261895.jpg";
import pic4 from "/Users/pranavarora/first/responsive/src/components/pexels-thiszun-(follow-me-on-ig-fb)-1139613.jpg";
import pic5 from "/Users/pranavarora/first/responsive/src/components/pexels-helena-lopes-4409279.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Babies are cool!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pic1}
              text="This baby could be cooler than you"
              label="Swag Baby"
              path="/sign-up"
            />
            <CardItem
              src={pic2}
              text="Merry Christmas! "
              label="Festive Baby"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={pic3}
              text="This baby is focused!"
              label="Serious Baby"
              path="/sign-up"
            />
            <CardItem
              src={pic4}
              text="Tell a funny joke you adult!"
              label="Shy Toddler"
              path="/sign-up"
            />
            <CardItem
              src={pic5}
              text="Ha Ha Ha"
              label="Laughing baby"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
