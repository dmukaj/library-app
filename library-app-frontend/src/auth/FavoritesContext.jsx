import { createContext, useEffect, useState } from "react";
import apiClient from "../api/api-client";

const FavoritesContext = createContext();

function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const addToFavorites = (item) => {
    const itemIndex = items.findIndex((book) => book._id === item._id);
    if (itemIndex === -1) {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }

    setFavorite(true);
    setTotalQuantity(items.length + 1);
  };

  useEffect(() => {
    apiClient.get("/favorites").then((res) => {
      setItems(res.data);
      setTotalQuantity(res.data.length);
    });
  }, [setItems]);

  const removeFromFavorites = (item) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((book) => book._id === item._id);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(itemIndex, 1);
        return updatedItems;
      }
      return prevItems;
    });
    setTotalQuantity(items.length - 1);
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await apiClient.get("/favorites");
      setItems(res.data);
      setTotalQuantity(res.data.length);
    };

    fetchFavorites();
  }, []);

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
        totalQuantity,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoriteProvider };
