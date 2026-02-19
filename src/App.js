import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../src/Pages/Home/home";
import { AppProvider } from "./Components/AppContext";
import { SignupPage } from "./Pages/SignupPage/signupPage";
import { SignInPage } from "./Pages/SignInPage/signinPage";
import { HomePage } from "./Pages/homePage/homePage";
import { ArticlePage } from "./Pages/ArticlePage/articlePage";
import { Layout } from "./Components/Layout/Layout";
import { AdminPage } from "./Pages/AdminPage/AdminPage";
import { Profile } from "./Pages/ProfilePage/profile";
import { AddPostPage } from "./Pages/ArticlePage/addPostPage";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

import "@fontsource/inter";

import { AppContext } from "./Components/AppContext";
import { Loader } from "./Components/Loader/Loader";

function AnimatedRoutes() {
  const location = useLocation();
  const { isLoading, setIsLoading } = React.useContext(AppContext);

  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Brief loading state for every page transition
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/blog" element={<ArticlePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-post" element={<AddPostPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
        <ToastContainer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
