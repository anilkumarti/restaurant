import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = () => {
  const count = 0;
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1> Meals </h1>
        <button> Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="food image here "></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
