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
    signinEmail: "",
    signinPassword: "",
  });
  const [signinErrorMessages, setSigninErrorMessages] = useState({
    emailError: false,
    passwordError: false,
  });
  const [isLoginclicked, setIsLoginclicked] = useState(false);
  const signinNavigate = useNavigate();

  const handleEmail = (e) => {
    setSigninDetails((prev) => ({
      ...prev,
      signinEmail: e.target.value,
    }));
    setSigninErrorMessages((prev) => ({
      ...prev,
      emailError: false,
    }));
  };
  const handlePassword = (e) => {
    setSigninDetails((prev) => ({
      ...prev,
      signinPassword: e.target.value,
    }));
    setSigninErrorMessages((prev) => ({
      ...prev,
      passwordError: false,
    }));
  };

  function handleSigninSubmit() {
    const isPasswordInvalid = signinDetails.signinPassword.trim() === "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      signinDetails.signinEmail
    );
    setSigninErrorMessages((prev) => ({
      ...prev,
      emailError: !isEmailValid,
    }));

    setSigninErrorMessages((prev) => ({
      ...prev,
      passwordError: isPasswordInvalid,
    }));

    if (!isPasswordInvalid && isEmailValid) {
      setIsLoginclicked(true);
      loginUser(signinDetails)
        .then((data) => {
          setSigninDetails((prev) => ({
            ...prev,
            signEmail: "",
          }));
          setSigninDetails((prev) => ({
            ...prev,
            signinPassword: "",
          }));
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
            onChange={handleEmail}
            className={signinErrorMessages.emailError ? "red" : null}
          />

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handlePassword}
              className={signinErrorMessages.passwordError ? "red" : null}
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
