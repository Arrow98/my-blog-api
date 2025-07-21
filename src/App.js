import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home/home";

import { SignupPage } from "./Pages/SignupPage/signupPage";
import { SignInPage } from "./Pages/SignInPage/signinPage";

import "@fontsource/inter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
