import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Main/Main";

import "./App.css";

import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown ? <Cart onHideCart={hideCartHandler} /> : ""}
      <div className="App">
        <Header onShowCart={showCartHandler} />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;
