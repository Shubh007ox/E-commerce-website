import React, { useContext } from "react";
import classes from "./Ncvigation.module.css";
import { NavLink } from "react-router-dom";
import CartContext from "./store/Cart-Context";
import AuthContext from "./store/auth-context";

function NavigationBar() {
  const CartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(CartContext)
  let numberCartItem = 0;
  CartCtx.items.forEach(item => {
    numberCartItem = numberCartItem + item.quantity
  })
  return (
    <React.Fragment>
      <nav>
        <div className={classes.header}>
          <NavLink to="/" className={classes.h1}>The Generics</NavLink>
          <div>
             <li className={classes.li2}>
               <NavLink to="/login" className={classes.link}>Login</NavLink>
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
          {/* <div>
            <li className={classes.li2}>
              <NavLink activeClassName={classes.active} to="/login" className={classes.link}>Login</NavLink>
            </li>
          </div> */}
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

{/* <React.Fragment>
<nav>
  {/* <h1>The you</h1> */}
//   <div className={classes.header}>
//     {isLoggedIn &&   <NavLink to="/" className={classes.h1}>The Generics</NavLink>}
//     {!isLoggedIn && (<div>
//         <li  className={classes.li2}>
//          <NavLink to="/home" className={classes.link}>Home</NavLink>
//        </li>
//     </div>)}
//     {!isLoggedIn && (
//        <div>
//        <li className={classes.li2}>
//          <NavLink activeClassName={classes.active} to="/store" className={classes.h3}>StorePage</NavLink>
//        </li>
//      </div>
//     )}
//     {!isLoggedIn && (
//       <div>
//       <li className={classes.li2}>
//         <NavLink activeClassName={classes.active} to="/cart" className={classes.link}>cart</NavLink>
//         </li>
//         <li className={classes.badge}>{numberCartItem}</li>
//     </div>
//     )}
//     {!isLoggedIn && (
//        <div>
//        <li className={classes.li2}>
//          <NavLink activeClassName={classes.active} to="/about" className={classes.link}>About Us</NavLink>
//        </li>
//      </div>
//     )}
//     {/* <div>
//       <li className={classes.li2}>
//         <NavLink activeClassName={classes.active} to="/login" className={classes.link}>Login</NavLink>
//       </li>
//     </div> */}
//     <div>
//       <li className={classes.li2}>
//         <NavLink activeClassName={classes.active} to="/contact" className={classes.link}>Contact-Us</NavLink>
//       </li>
//     </div>
//     </div>
// </nav>
// </React.Fragment> */}