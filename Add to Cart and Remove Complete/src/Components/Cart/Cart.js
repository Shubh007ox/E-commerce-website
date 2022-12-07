import React, { useEffect, useState } from "react";
import classes from './Cart.module.css';
import Card from "./Card";

const Cart = ({ cart, setC, onClicked }) => {
  const [totalAmount,setTotalAmount] = useState(0);
  const TotalAmountHandler = () => {
    let total = 0;
    cart.map((item) => (
      total += item.quantity * item.price
    ))
    setTotalAmount(total)
  }
  const itemRemoveHandler = (id) => {
    const list = cart.filter((item) => item.id !== id ) 
    setC(list)
  }
  useEffect(() => {
    TotalAmountHandler();
  })
  return (
    <Card>
      <article className={classes.article}>
        <h2>Your Cart</h2>
        {cart?.map((item) => (
          <div key={item.id} className={classes.cart_box}>
            <div>
              <h3>{item.title}</h3>
            </div>
            <div className={classes}>
              {/* <button onClick={() => onClicked(item, -1)}> - </button> */}
              {/* <button>{item.quantity}</button> */}
              {/* <button onClick={() => onClicked(item, +1)}> + </button> */}
            </div>
            <div className={classes}>
              <span>{item.price}</span>
              <button onClick={()=>itemRemoveHandler(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className={classes.total}>
          <span>TotalAmount</span>
          <span> {totalAmount}.00 -- Rs</span>
        </div>
      </article>
    </Card>
  );
};

export default Cart;
