import React from "react";
import "./home.css";
import { Header } from "../../Components/Header/header";
import { Hero } from "../../Components/Hero/hero";
import { About } from "../../Components/About/about";
import { Impact } from "../../Components/Impact/impact";

import { ArticleSection } from "../../Components/ArticleSection/articleSection";
import { LastestArticleSection } from "../../Components/lastestArticleSection/lastestArticleSection";
import { SubscribeSection } from "../../Components/Subcribe/subcribeSection";
import { Footer } from "../../Components/Footer/footer";


export function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Impact />

      <ArticleSection />
      <LastestArticleSection />
      <SubscribeSection />
      <Footer />

    </div>
  );
}
