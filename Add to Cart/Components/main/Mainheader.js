import React from "react";
import classes from "./Mainhea.module.css";

function Mainheader({size}) {
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <header>
          <h2>The Genitics</h2>
        </header>
        <span>Home</span>
        <span>About us</span>
        <div>
        <button className={classes.button}>
          <span>Cart</span>
          <span className={classes.badge}>{size}</span>
        </button>
        </div>
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
