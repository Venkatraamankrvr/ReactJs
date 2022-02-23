import {  useState } from "react";
// import testUtils from "react-dom/test-utils";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
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
      {cartIsShown && <Cart onClose = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
