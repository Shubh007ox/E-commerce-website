import React, { useContext } from "react";
import classes from "./Ncvigation.module.css";
import { NavLink } from "react-router-dom";
import CartContext from "./store/Cart-Context";

function NavigationBar() {
  const CartCtx = useContext(CartContext)
  console.log(CartContext)
  let numberCartItem = 0;
  CartCtx.items.forEach(item => {
    numberCartItem = numberCartItem + item.quantity
  })
  return (
    <React.Fragment>
      <nav>
        {/* <h1>The you</h1> */}
        <div className={classes.header}>
          <NavLink to="/" className={classes.h1}>The Generics</NavLink>
          <div>
            <li  className={classes.li2}>
              <NavLink to="/" className={classes.link}>Home</NavLink>
            </li>
          </div>
          <div>
            <li className={classes.li2}>
              <NavLink activeClassName={classes.active} to="/store" className={classes.h3}>StorePage</NavLink>
            </li>
          </div>
          <div>
            <li className={classes.li2}>
              <NavLink activeClassName={classes.active} to="/cart" className={classes.link}>cart</NavLink>
              </li>
              <li className={classes.badge}>{numberCartItem}</li>
          </div>
          <div>
            <li className={classes.li2}>
              <NavLink activeClassName={classes.active} to="/about" className={classes.link}>About Us</NavLink>
            </li>
          </div>
          <div>
            <li className={classes.li2}>
              <NavLink activeClassName={classes.active} to="/contact" className={classes.link}>Contact-Us</NavLink>
            </li>
          </div>
          </div>
      </nav>
    </React.Fragment>
  );
}

export default NavigationBar;

{
  /* <div class="container-fluid">
<a class="navbar-brand" href="/">
  Navbar
</a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">
        Link
      </a>
    </li>
  </ul>
</div>
</div> */
}
