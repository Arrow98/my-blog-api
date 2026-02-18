import React, { useContext } from "react";
import "./hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AppContext } from "../AppContext";

export function Hero() {
  const { user } = useContext(AppContext);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="hero-box">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-header">
          <div>TechBlog</div>
          <div>Professional</div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hero-info">
          Discover cutting-edge insights, expert tutorials, and the latest
          trends in technology and software development.
        </motion.div>
        
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="hero-button"
          >
            <div className="left-space"> Explore Articles</div>
            <FaArrowRightLong />
          </motion.button>
          
          {user && user.role === "admin" && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Admin Dashboard
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

