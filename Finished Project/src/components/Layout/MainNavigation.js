import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../store/auth-context';
import CartContext from '../store/Cart-Context';

const MainNavigation = () => {
  const CartCtx = useContext(CartContext);
  const authContexts = useContext(AuthContext);
  const isLoggedIn = authContexts.isLoggedIn;
  const logoutHandler = () => {
    authContexts.logout()
    //also can redirect from here
    
  }
  console.log(CartContext);
  let numberCartItem = 0;
  CartCtx.items.forEach(item => {
    numberCartItem = numberCartItem + item.quantity
  });
  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>The Generics</div>
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
          <li>
            <NavLink activeClassName={classes.active} to='/auth'>Login</NavLink>
          </li>
          )}
          {/* {isLoggedIn && (
            <li>
            <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
          </li>
          )} */}
            {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/store'>StorePage</NavLink>
            </li>
          )}
           {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/cart'>Cart</NavLink>
              <li className={classes.badge}>{numberCartItem}</li>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/one'>About-Us</NavLink>
            </li>
          )}
           {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to='/contact'>Contact-us</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
             <button onClick={logoutHandler}>Logout</button>
           </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
