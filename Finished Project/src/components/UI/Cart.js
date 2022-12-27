import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-Context";

function Carts() {
  const [totalAmount, setTotalAmount] = useState(0);
  const CartCtx = useContext(CartContext);
  const totalAmountHandler = () => {
    let total = 0;
    CartCtx.items.map((item) => (total += item.quantity * item.price));
    setTotalAmount(total);
  };
  const itemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };

  useEffect(() => {
    totalAmountHandler();
  });

  return (
    <Card>
      <article className={classes.article}>
        {CartCtx.items.map((item) => (
          <div className={classes.cart_box}>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => itemRemoveHandler(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}.00 -- Rs</span>
        </div>
      </article>
    </Card>
  );
}

export default Carts;
