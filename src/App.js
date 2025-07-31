import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home/home";
import { AppProvider } from "./Components/AppContext";
import { SignupPage } from "./Pages/SignupPage/signupPage";
import { SignInPage } from "./Pages/SignInPage/signinPage";
import { HomePage } from "./Pages/homePage/homePage";

import "@fontsource/inter";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
