import React from "react";
import classes from "./Mainhea.module.css";

function Mainheader() {
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <header>
          <h2>The Genitics</h2>
        </header>
        <span>Home</span>
        <span><h4>Cart</h4></span>
        <span>About us</span>
      </nav>
      <div className={classes.info}>
        <h5>
            the
        </h5>
            <h1>The Generics</h1>
      </div>
    </React.Fragment>
  );
}

export default Mainheader;
