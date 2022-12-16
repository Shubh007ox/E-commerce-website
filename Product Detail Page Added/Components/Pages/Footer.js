import React from "react";
import classes from './Footer.module.css';
function Footer(){
    return(
    <div className={classes.dif}>
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
    </div>
    )
}
export default Footer;