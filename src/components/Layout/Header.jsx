import React from "react";
import CartBtn from "./CartBtn";
import "./Header.css";
import candyImage from '../../assets/candyTable.jpg'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="title"></div>
        <CartBtn onClick={props.onShowCart}/>
      </header>
      <div className="backdrop-image">
        <img src={candyImage} alt="backdrop"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
