import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="spinner"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div 
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading TechBlog...
      </motion.div>
    </div>
  );
};
