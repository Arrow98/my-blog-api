import React, { useEffect, useState, useContext } from "react";
import "./signup.css";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { signinUser } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [isSigningup, setIsSigningup] = useState(false);
  const [errorAlert, setErrorAlert] = useState({
    firstnameError: false,
    lastnameError: false,
    passwordError: false,
    emailError: false,
  });
  const loginNavigate = useNavigate();

  const handleGetFirstname = (e) =>
    setUserDetails((prev) => ({
      ...prev,
      firstName: e.target.value,
    }));
  const handleGetLastname = (e) =>
    setUserDetails((prev) => ({
      ...prev,
      lastName: e.target.value,
    }));
  const handleGetPassword = (e) =>
    setUserDetails((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  const handleGetEmail = (e) =>
    setUserDetails((prev) => ({
      ...prev,
      email: e.target.value,
    }));

  function validation() {
    const isFirstnameInvalid = userDetails.firstName.trim() === "";
    const isLastnameInvalid = userDetails.lastName.trim() === "";
    const isPasswordInvalid = userDetails.password.trim() === "";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email);

    return {
      isFirstnameInvalid,
      isLastnameInvalid,
      isPasswordInvalid,
      isValid,
    };
  }
  function handleSubmit() {
    const {
      isFirstnameInvalid,
      isLastnameInvalid,
      isPasswordInvalid,
      isValid,
    } = validation();

    setErrorAlert((prev) => ({
      ...prev,
      emailError: !isValid,
    }));

    if (isFirstnameInvalid) {
      setErrorAlert((prev) => ({
        ...prev,
        firstnameError: true,
      }));
    } else {
      setErrorAlert((prev) => ({
        ...prev,
        firstnameError: false,
      }));
    }

    if (isLastnameInvalid) {
      setErrorAlert((prev) => ({
        ...prev,
        lastnameError: true,
      }));
    } else {
      setErrorAlert((prev) => ({
        ...prev,
        lastnameError: false,
      }));
    }

    if (isPasswordInvalid) {
      setErrorAlert((prev) => ({
        ...prev,
        passwordError: true,
      }));
    } else {
      setErrorAlert((prev) => ({
        ...prev,
        passwordError: false,
      }));
    }

    if (
      !isFirstnameInvalid &&
      !isLastnameInvalid &&
      !isPasswordInvalid &&
      isValid
    ) {
      setIsSigningup(true);
      signinUser(userDetails)
        .then((data) => {
          setIsSigningup(false);
          toast.success("SignUp Successful");
          setUserDetails({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });

          setTimeout(() => {
            loginNavigate("/signin");
          }, 1000);
        })
        .catch((error) => {
          toast.error(error.message);
          setIsSigningup(false);
        });
    }
  }

  return (
    <div className="signup">
      <div className="signup-header">
        <div>
          <IoBookOutline size={30} />
        </div>
        <div className="signup-header-info">TechBlog</div>
      </div>
      <div className="signup-form-container">
        <div className="signup-form-box">
          <h2>Create an account</h2>
          <p>Enter your details to get started</p>

          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={handleGetFirstname}
            className={errorAlert.firstnameError ? "red" : null}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={handleGetLastname}
            className={errorAlert.lastnameError ? "red" : null}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleGetEmail}
            className={errorAlert.emailError ? "red" : null}
          />

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              onChange={handleGetPassword}
              className={errorAlert.passwordError ? "red" : null}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button
            className="signup-button"
            onClick={handleSubmit}
            disabled={isSigningup}
          >
            {isSigningup ? "Creating Account..." : "Create Account"}
          </button>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn">
              <MdEmail className="icon" /> Google
            </button>
            <button className="social-btn">
              <FaGithub className="icon" /> GitHub
            </button>
          </div>
          <p className="signin-link">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
