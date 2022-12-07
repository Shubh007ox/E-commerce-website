import React from "react";
import classes from "./Mainhea.module.css";

function Mainheader({ size, onClicked }) {
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <header>
          <span onClick={() => onClicked(true)}>
            <h2>The Generics</h2>
          </span>
        </header>
        <div>
          <span>Home</span>
        </div>
        <div>
          <span>About us</span>
        </div>
        <div>
          <button className={classes.button} onClick={() => onClicked(false)}>
            <span>Cart</span>
            <span className={classes.badge}>{size}</span>
          </button>
        </div>
      </nav>
      <li  className={classes.info}>
      <div>
        {/* <h5>the</h5> */}
        <h1>The Generics</h1>
      </div>
      </li>
    </React.Fragment>
  );
}

export default Mainheader;
