import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCTX=useContext(CartContext)

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((item) => (
        <li key={item.id}> {item.name} {item.price} 
        <div><button onClick={cartCTX.addItem}>+ </button> <span/> <button onClick={cartCTX.removeItem}>-</button></div>
         </li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart} >
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span> {cartCTX.totalAmount} </span>
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
