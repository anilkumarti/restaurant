import { Fragment } from "react";
import Header from "./compoments/Layout/Header";
import Meals from "./compoments/Meals/Meals";
import Cart from "./compoments/Cart/Cart";

function App() {

  return (

    <Fragment>
      <Cart/>
  <Header/>

  <main>
    <Meals/>
  </main> 

    </Fragment>
  );
}

export default App;
