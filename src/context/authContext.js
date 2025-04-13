"use client";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={(isAuth, setIsAuth)}>
      {children}
    </AuthContext.Provider>
  );
};
