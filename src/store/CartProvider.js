import CartContext from "./cart-context";
import React,  {useState} from "react";


const CartProvider = (props) => {
  const [items,setItems]=useState([])
  const AddItemToCartHandler = (item) => {
      setItems((prevItems)=> 
      [...prevItems,item])
     console.log(cartContext.items)
  };
  const RemoveItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: AddItemToCartHandler,
    removeItem: RemoveItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}> {console.log("Inside Provider" ,cartContext.items)}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
