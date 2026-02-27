import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import "./signin.css";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { loginUser } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export function SignIn() {
  const { login } = useContext(AppContext);
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
    const { email, password } = signinDetails;
    const isPasswordInvalid = password.trim() === "";
    const isEmailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setSigninErrorMessages({
      emailError: isEmailInvalid,
      passwordError: isPasswordInvalid,
    });

    return !(isPasswordInvalid || isEmailInvalid);
  };

  const handleChangeInput = (e) => {
    setSigninDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSigninSubmit() {
    if (!validate()) return;
    setIsLoginclicked(true);
    loginUser(signinDetails)
      .then((data) => {
        login(data.data); // Corrected: user data is in data.data
        localStorage.setItem("techblog_token", data.token);
        setSigninDetails({
          email: "",
          password: "",
        });
        setIsLoginclicked(false);
        toast.success("Login Successful");
        setTimeout(() => {
          signinNavigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoginclicked(false);
      });
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for snappy feel
        staggerChildren: 0.1,
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
      className="signin"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="signin-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <IoBookOutline size={30} />
        </div>
        <div className="signup-header-info">TechBlog</div>
      </motion.div>
      <div className="signin-form-container">
        <motion.div
          className="signin-form-box"
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Welcome back</motion.h2>
          <motion.p variants={itemVariants}>Sign in to your account to continue</motion.p>

          <motion.div variants={itemVariants} className="input-group">
            <label>Email</label>
            <motion.input
              whileFocus={inputFocus}
              type="email"
              placeholder="Enter your email"
              onChange={handleChangeInput}
              className={signinErrorMessages.emailError ? "red" : null}
              name="email"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <motion.input
                whileFocus={inputFocus}
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
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            className="signin-button"
            onClick={handleSigninSubmit}
            disabled={isLoginclicked}
          >
            {isLoginclicked ? "Signing in..." : "Sign In"}
          </motion.button>

          <motion.p variants={itemVariants} className="signup-link">
            Don’t have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign up
            </Link>
          </motion.p>

          <motion.div variants={itemVariants} className="demo-credentials">
            <p>Demo Credentials:</p>
            <p>Email: admin@techblog.com</p>
            <p>Password: admin123</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
