import React, { useState } from "react";
import "./signup.css";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { signinUser } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  const inputFocus = {
    scale: 1.01,
    boxShadow: "0 0 0 2px var(--button-bg-primary)",
    transition: { duration: 0.2 }
  };

  return (
    <motion.div
      className="signup"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="signup-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <IoBookOutline size={30} />
        </div>
        <div className="signup-header-info">TechBlog</div>
      </motion.div>
      <div className="signup-form-container">
        <motion.div
          className="signup-form-box"
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Create an account</motion.h2>
          <motion.p variants={itemVariants}>Enter your details to get started</motion.p>

          <motion.div variants={itemVariants} className="input-group">
            <label>First Name</label>
            <motion.input
              whileFocus={inputFocus}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChangeInput}
              className={errors.firstname ? "red" : null}
              name="firstname"
              value={form.firstname}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="input-group">
            <label>Last Name</label>
            <motion.input
              whileFocus={inputFocus}
              type="text"
              placeholder="Enter your last name"
              onChange={handleChangeInput}
              name="lastname"
              className={errors.lastname ? "red" : null}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="input-group">
            <label>Email</label>
            <motion.input
              whileFocus={inputFocus}
              type="email"
              placeholder="Enter your email"
              onChange={handleChangeInput}
              className={errors.email ? "red" : null}
              name="email"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <motion.input
                whileFocus={inputFocus}
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
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            className="signup-button"
            onClick={handleSubmit}
            disabled={isSigningUp}
          >
            {isSigningUp ? "Creating Account..." : "Create Account"}
          </motion.button>

          <motion.p variants={itemVariants} className="signin-link">
            Already have an account? <a href="/signin">Sign in</a>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
