import React, { createContext, useContext } from "react";
import appData from "../utils/appData.json";

// Create store
export const AppContext = createContext(appData);

// Expose consumer hook
export const useAppContext = () => useContext(AppContext);

// Expose provider component
const AppProvider = ({ children }) => (
  <AppContext.Provider>{children}</AppContext.Provider>
);

export default AppProvider;
