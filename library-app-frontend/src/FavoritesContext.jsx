import { createContext, useState } from "react";

const FavoritesContext = createContext();

function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const addToFavorites = (item) => {
    const itemIndex = items.findIndex((book) => book._id === item._id);
    if (itemIndex === -1) {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
    setFavorite(true);
  };

  const removeFromFavorites = (item) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((book) => book._id === item._id);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];

        updatedItems.splice(itemIndex, 1);
        return updatedItems;
      }

      console.log(itemIndex);
      return prevItems;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        items,
        setItems,
        addToFavorites,
        favorite,
        setFavorite,
        removeFromFavorites,
        getTotalQuantity,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoriteProvider };
