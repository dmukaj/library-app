import React, { useEffect, useState } from "react";
import apiClient from "../api/api-client";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [curentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    console.log("result");
    await apiClient.get("/users/me").then((res) => {
      setCurrentUser(res.data);
    });
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ curentUser, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
