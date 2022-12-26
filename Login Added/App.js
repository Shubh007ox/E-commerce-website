import React,{useContext} from "react";
import NavigationBar from "./Components/Ncvigation";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import StorePage from "./Components/Pages/store";
import Carts from "./Components/Cart";
import Contact from "./Components/Pages/Contact";
import { Route, Switch, Redirect } from "react-router-dom";
import Product from "./Components/Pages/Product1";
import Login from "./Components/Pages/Login";
import AuthContext from "./Components/store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
      <Route path="/store" exact>
          {authCtx.isLoggedIn && <StorePage />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path={"/store/:productId"}>
          <Product />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/cart">
        {/* {authCtx.isLoggedIn &&   <Carts />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />} */}
        <Carts />
        </Route>
        <Route path="/about">
          {/* {authCtx.isLoggedIn && <About />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />} */}
          <About />
        </Route>
        <Route path="/contact">
          {/* {authCtx.isLoggedIn && <Contact />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />} */}
          <Contact />
        </Route>
        <Route path="*">
          <Redirect to="/store" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
