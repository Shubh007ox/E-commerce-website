import React from "react";
import classes from './Footer.module.css';
function Footer(){
    return(
    <footer className={classes.fot}>
      <div className={classes.footer}>
        The Generics
      </div>
      <div className={classes.footerI}>
        <ul className={classes.ull}>
          <li>
            <a href="https://www.youtube.com" className={classes.aa}>youtube</a>
          </li>
        </ul>
      </div> 

    </footer> 
    )
}
export default Footer;