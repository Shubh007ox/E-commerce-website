import React from "react";
import NavigationBar from "./Components/Ncvigation";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import StorePage from "./Components/Pages/store";
import Carts from "./Components/Cart";
import Contact from "./Components/Pages/Contact";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
        <NavigationBar size/>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <StorePage />
        </Route>
        <Route path="/cart">
          <Carts />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        </Switch>
    </React.Fragment>
  );
}

export default App;
