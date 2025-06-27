import React from "react";
import "./home.css";
import { Header } from "../../Components/Header/header";
import { Hero } from "../../Components/Hero/hero";
import { About } from "../../Components/About/about";
import { Impact } from "../../Components/Impact/impact";

export function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Impact />
    </div>
  );
}
