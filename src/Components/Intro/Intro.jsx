import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
// import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Shahrukh Khan</span>
          <span>
            Frontend Developer with some practical life experience in web
            designing and development, producing the qualitative products
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/SRK70900" target="_blank">
            <img src={Github} alt="Github Image" />
          </a>

          <a href="https://www.linkedin.com/in/srk70900/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn Image" />
          </a>

          <a href="https://www.instagram.com/srk70900/" target="_blank">
            <img src={Instagram} alt="Instagram Image" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
          // initial={{ left: "-36%" }}
          // whileInView={{ left: "-24%", rotate: "45deg" }}
          // transition={transition}
          src={glassesimoji}
          alt=""
        />
        <div
          // initial={{ top: "-4%", left: "74%" }}
          // whileInView={{ left: "68%" }}
          // transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div
          // initial={{ top: "18rem", left: "9rem" }}
          // whileInView={{ left: "0rem" }}
          // transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>

        {/* Blur Divs  */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: " 21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
