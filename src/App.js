import { Fragment } from "react";
import Header from "./compoments/Layout/Header";
import Meals from "./compoments/Meals/Meals";
function App() {

  return (

    <Fragment>
      
  <Header/>
  <main>
    <Meals/>
  </main>
    </Fragment>
  );
}

export default App;
