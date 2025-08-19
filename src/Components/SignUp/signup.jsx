import React, { useState } from "react";
import "./signup.css";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { signinUser } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignUp() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const loginNavigate = useNavigate();

  const handleChangeInput = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validate = () => {
    const { firstname, lastname, email, password } = form;

    const isFirstnameInvalid = firstname.trim() === "";
    const isLastnameInvalid = lastname.trim() === "";
    const isPasswordInvalid = password.trim() === "";
    const isEmailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setErrors({
      firstname: isFirstnameInvalid,
      lastname: isLastnameInvalid,
      password: isPasswordInvalid,
      email: isEmailInvalid,
    });

    return !(
      isFirstnameInvalid ||
      isLastnameInvalid ||
      isPasswordInvalid ||
      isEmailInvalid
    );
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setIsSigningUp(true);
    console.log(form);
    signinUser(form.firstname, form.lastname, form.email, form.password)
      .then((data) => {
        setForm({ firstname: "", lastname: "", email: "", password: "" });
        toast.success("SignUp Successful");
        setTimeout(() => {
          loginNavigate("/signin");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsSigningUp(false);
      });
  };

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
            onChange={handleChangeInput}
            className={errors.firstname ? "red" : null}
            name="firstname"
            value={form.firstname}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={handleChangeInput}
            name="lastname"
            className={errors.lastname ? "red" : null}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChangeInput}
            className={errors.email ? "red" : null}
            name="email"
          />

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              onChange={handleChangeInput}
              className={errors.password ? "red" : null}
              name="password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button
            className="signup-button"
            onClick={handleSubmit}
            disabled={isSigningUp}
          >
            {isSigningUp ? "Creating Account..." : "Create Account"}
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
