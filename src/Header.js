import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhzhdkOp0v7TC3ymZf7f7FlyMfvLo9SHDS4tU_8cll1M-Dt-HevBkKJDW-EJfNV23mAo&usqp=CAU"
        alt=""
      />
      <h1 className="text">
        Blockchain <span className="ntext">.com</span>
      </h1>
    </div>
  );
}

export default Header;
