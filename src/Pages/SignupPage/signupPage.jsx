import React from "react";
import "./signupPage.css";
import { Header } from "../../Components/Header/header";
import { SignUp } from "../../Components/SignUp/signup";
import { Footer } from "../../Components/Footer/footer";

export function SignupPage() {
  return (
    <div className="signup-page">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}
