import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footers from "./Components/main/Footer";
import Mainheader from "./Components/main/Mainheader";
import MusicList from "./Components/main/MusicList";
import Alert from "react-bootstrap/Alert";

function App() {
  const [productShow, setProductShow] = useState(true);
  const [cartIsVisible, setCartIsVisible] = useState([]);
  const [aalert, setAlert] = useState(false);

  const addToCartHandler = (item) => {
    let AlreadyInTheCart = false;
    cartIsVisible.forEach((product) => {
      if (item.id === product.id) AlreadyInTheCart = true;
    });
    if (AlreadyInTheCart){
      setAlert(true)
      alert('Item is already Added to the Cart')
      return;
    }
    setCartIsVisible([...cartIsVisible, item]);
  };

  return (
    <Fragment>
      <Mainheader size={cartIsVisible.length} />
      <MusicList onClicked={addToCartHandler} />
      <Cart />
      <Footers />
    </Fragment>
  );
}

export default App;
