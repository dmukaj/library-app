import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [favorite, setFavorite] = useState(false);

  //   const addToCart = (id, image, title, price) => {
  //     setItems((prevState) => [...prevState, { id, image, title, price }]);
  //   };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    setFavorite(false);
  };

  const addToCart = (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem._id === item._id
    );
    setFavorite(true);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const cartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addToCart,
        removeFromCart,
        getTotalQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
