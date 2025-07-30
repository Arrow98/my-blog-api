import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [color, setColor] = useState("");
  return (
    <AppContext.Provider value={{ showToast, setShowToast, color, setColor }}>
      {children}
    </AppContext.Provider>
  );
};
