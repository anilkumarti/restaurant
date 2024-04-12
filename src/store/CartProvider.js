import CartContext from "./cart-context";

const CartProvider=(props)=> {
   const AddItemToCartHandler=(item)=> {

   }
   const RemoveItemFromCartHandler=(id)=> {

   }

   const cartContext= {
    items: [1,1,2],
    totalAmout: 0,
    addItem: AddItemToCartHandler,
    removeItem: RemoveItemFromCartHandler
    }
return ( 
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
}
export default CartProvider;