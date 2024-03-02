import { useState } from "react";
import CartContext from "./cart-context";

const addToCartLogic = (prevCart, item) => {
    const updatedCart = new Map(prevCart);

    const prevQty = prevCart.has(item.id) ? Number(prevCart.get(item.id).quantity) : 0;
    updatedCart.set(item.id, {...item, quantity:(Number(item.quantity) + prevQty)});
    return updatedCart;
}

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(new Map());

  const addItemToCartHandler = (item) => {
    setCartItems((prevCart) => {
        const prevQty = prevCart.get(item.id) ? Number(prevCart.get(item.id).quantity) : 0;
        if(Number(item.quantity) + prevQty > 10){
            alert('Item quantity in the cart must not exceed 10');
            return prevCart;
        }
        return addToCartLogic(prevCart, item);
    });
  };

  const deleteItemFromCartHandler = (id) => {
    setCartItems((prevCart) => {
      if(!prevCart.has(id))
      {
        alert("Item with id: " + id + " does not exist in the cart");
        return prevCart;
      }
      const updatedCart = new Map(prevCart);
      updatedCart.get(id).quantity > 1 ? updatedCart.get(id).quantity-- : updatedCart.delete(id);
      return updatedCart; 
    });
  };

  let cartTotal = 0;
  cartItems.forEach((item,key) => {
    cartTotal += Number(item.price) * Number(item.quantity);
  });

  const cartContext = {
    items: cartItems,
    total: cartTotal,
    addItem: addItemToCartHandler,
    removeItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
