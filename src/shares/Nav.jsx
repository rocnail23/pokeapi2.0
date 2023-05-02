import React from "react";
import "./styles/Nav.css";
import iconBar from "../assets/image 12.png"
const Nav = () => {
  return (
    <div className="nav">
      <div className="bar-red">
        <img className="icon_bar" src={iconBar} alt="" />
      </div>
      <div className="bar-black">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
