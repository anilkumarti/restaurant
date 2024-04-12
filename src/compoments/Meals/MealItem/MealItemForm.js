import React,{useContext} from "react";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const cartCTX=useContext(CartContext);
 const addItemToCart=(e)=> {
  e.preventDefault();
   const quantity=document.getElementById("amount_"+props.id).value;
   cartCTX.addItem({...props.item,quantity:quantity})
   {console.log("Value of value", quantity)}
 }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}> + Add </button>
    </form>
  );
};

export default MealItemForm;
