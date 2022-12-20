import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          perferendis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>

        <button className="button s-button">Hire me !</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff" }}></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork " />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr " />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon " />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify " />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook " />
          </div>
        </div>

        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
