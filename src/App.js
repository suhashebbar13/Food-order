import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import Cartprovider from "./components/shop/Cartprovider";

function App() {
  const [carthand, setcarthand] = useState(false)
  const showcart= () => {
    setcarthand(true);
  }
  
  const closecart= () =>{
    setcarthand(false);
  }
  return (
    <Cartprovider>
      {carthand && <Cart onclose={closecart}/>}
      <Header onshowcart={showcart}/>
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
