import React,{useState} from 'react';
import classes from './MealItem.module.css'
const MealItem = (props) => {
  const [currentMeal,changeCurrentMeal]=useState(0);
  const handleMeal=(e)=> {
changeCurrentMeal(currentMeal+1)
  }
    const price=`$${props.price}`
  return (
    <li className={classes.meal}>
    <div> <h3>{props.name}</h3>
    <div className={classes.description}> {props.description}</div>
    <div className={classes.price}> {price}</div>
    </div>
    <div> 
       Amount={currentMeal}
       <div> <button onClick={handleMeal}> + Add</button></div>
       

    </div>
    </li>
  )
}

export default MealItem;
