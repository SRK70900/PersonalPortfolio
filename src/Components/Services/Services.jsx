import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          perferendis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        {/* 1st Card */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </div>

        {/* 2nd Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Develop"}
            detail={"HTML, CSS, BootStrap, JavaScript, React"}
          />
        </div>

        {/* 3rd Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"HTML, CSS, BootStrap, JavaScript, React"}
          />
        </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};
export default Services;
