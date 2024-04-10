import { Fragment,useState } from "react";
import Header from "./compoments/Layout/Header";
import Meals from "./compoments/Meals/Meals";
import Cart from "./compoments/Cart/Cart";

function App() {
const [cartIsShown,setCartIsShown]=useState(true);
const showCartHandler=()=> {
  setCartIsShown(true)
} 
 const hideCartHandler=()=> {
  setCartIsShown(false)
}


  return (

    <Fragment>
    { cartIsShown && <Cart onHideCart={hideCartHandler}/>}
  <Header onShowCart={showCartHandler} />

  <main>
    <Meals/>
  </main> 

    </Fragment>
  );
}

export default App;
