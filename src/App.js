import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home/home";
import "@fontsource/inter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
