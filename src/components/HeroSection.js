import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import im from "/Users/pranavarora/first/responsive/src/components/pexels-henley-design-studio-1108195.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src={im} alt="" /> */}
      <h1>SITE WELCOME</h1>
      <p>Go ahead resize this window </p>
      <div className="hero-btns">
        <Link to="/sign-up" className="btn-mobile">
          <button type="button" className=" btns btn btn-danger  btn-lg">
            Call to Action!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
