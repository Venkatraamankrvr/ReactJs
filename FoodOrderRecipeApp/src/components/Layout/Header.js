import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={Classes.header}>
        <h1>Reacts Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={Classes["main-image"]}>
        <img src={MealsImage} alt="A table of food "></img>
      </div>
    </>
  );
};
export default Header;
