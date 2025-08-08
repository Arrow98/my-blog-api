import React from "react";
import "./signinPage.css";
import { Header } from "../../Components/Header/header";
import { SignIn } from "../../Components/SignIn/signin";
import { Footer } from "../../Components/Footer/footer";

export function SignInPage() {
  return (
    <div className="signin-page">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
}
