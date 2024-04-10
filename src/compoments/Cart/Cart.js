import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: "9.99" }].map((item) => (
        <li key={item.id}>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart} >
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.53 </span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideCart}
        >
          CLOSE
        </button>
        <button className={classes.button}>ORDER</button>
      </div>
    </Modal>
  );
};
export default Cart;
