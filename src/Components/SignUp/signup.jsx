import React, { useEffect, useState } from "react";
import "./signup.css";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { signinUser } from "../../Services/auth";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isclicked, setIsclicked] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleGetFirstname = (e) => setFirstname(e.target.value);
  const handleGetLastname = (e) => setLastname(e.target.value);
  const handleGetPassword = (e) => setPassword(e.target.value);
  const handleGetEmail = (e) => setEmail(e.target.value);

  function handleSubmit() {
    const isFirstnameInvalid = firstname.trim() === "";
    const isLastnameInvalid = lastname.trim() === "";
    const isPasswordInvalid = password.trim() === "";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!isValid);

    if (isFirstnameInvalid) {
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }

    if (isLastnameInvalid) {
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }

    if (isPasswordInvalid) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (
      !isFirstnameInvalid &&
      !isLastnameInvalid &&
      !isPasswordInvalid &&
      isValid
    ) {
      setIsclicked(true);
      signinUser(firstname, lastname, email, password)
        .then((data) => {
          console.log(data);
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setIsclicked(false);
        })
        .catch((err) => {
          console.error(err.message);
          setIsclicked(false);
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
            className={firstnameError ? "red" : null}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={handleGetLastname}
            className={lastnameError ? "red" : null}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleGetEmail}
            className={emailError ? "red" : null}
          />

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              onChange={handleGetPassword}
              className={passwordError ? "red" : null}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button
            className="signup-button"
            onClick={handleSubmit}
            disabled={isclicked}
          >
            {isclicked ? "Creating Account..." : "Create Account"}
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
