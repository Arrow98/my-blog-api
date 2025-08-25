import { useContext, useEffect, useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { loginUser } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });
  const [signinErrorMessages, setSigninErrorMessages] = useState({
    emailError: false,
    passwordError: false,
  });
  const [isLoginclicked, setIsLoginclicked] = useState(false);
  const signinNavigate = useNavigate();

  const validate = () => {
    const { signinEmail, signinPassword } = signinDetails;
    const isPasswordInvalid = signinPassword.trim() === "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signinEmail);
    setSigninErrorMessages({
      emailError: isEmailValid,
      passwordError: isPasswordInvalid,
    });

    return !(isPasswordInvalid || isEmailValid);
  };

  const handleChangeInput = (e) => {
    setSigninDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSigninSubmit() {
    if (!validate) return;
    setIsLoginclicked(true);
    loginUser(signinDetails)
      .then((data) => {
        setSigninDetails({
          email: "",
          password: "",
        });

        setIsLoginclicked(false);
        toast.success("Login Successful");
        setTimeout(() => {
          signinNavigate("/homePage");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoginclicked(false);
      });
  }

  return (
    <div className="signin">
      <div className="signin-header">
        <div>
          <IoBookOutline size={30} />
        </div>
        <div className="signup-header-info">TechBlog</div>
      </div>
      <div className="signin-form-container">
        <div className="signin-form-box">
          <h2>Welcome back</h2>
          <p>Sign in to your account to continue</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChangeInput}
            className={signinErrorMessages.emailError ? "red" : null}
            name="email"
          />

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handleChangeInput}
              className={signinErrorMessages.passwordError ? "red" : null}
              name="password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button
            className="signin-button"
            onClick={handleSigninSubmit}
            disabled={isLoginclicked}
          >
            {isLoginclicked ? "Signing in..." : "Sign In"}
          </button>

          <p className="signup-link">
            Don’t have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <a href="#">Sign up</a>
            </Link>
          </p>

          <div className="demo-credentials">
            <p>Demo Credentials:</p>
            <p>Email: admin@techblog.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
