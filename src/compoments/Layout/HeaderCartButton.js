import React ,{useContext} from 'react'

import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon.js'
import CartContext from '../../store/cart-context.js'

const HeaderCartButton = (props) => {
   const cartCtx=useContext(CartContext)
   const numberOfCartItems=cartCtx.items.reduce((total,item)=> { return total+ Number(item.quantity) },0)
  
  return (
  
    <button  className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}> 
           <CartIcon></CartIcon>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {numberOfCartItems} </span>

    </button>
  
  )
}

export default HeaderCartButton;
