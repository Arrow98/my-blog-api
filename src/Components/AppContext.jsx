import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("techblog_theme") || "light");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("techblog_user");
    try {
      return savedUser && savedUser !== "undefined" ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("techblog_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("techblog_user");
    localStorage.removeItem("techblog_token");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("techblog_theme", theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    isLoading,
    setIsLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
