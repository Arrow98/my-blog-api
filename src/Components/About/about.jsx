import React from "react";
import "./about.css";
import { BsStars } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

export function About() {
  const insightData = [
    {
      icon: <BsStars size={30} />,
      title: "Latest Insights",
      description:
        "Stay ahead with cutting-edge technology trends and best practices from industry experts.",
    },
    {
      icon: <MdOutlineStarBorderPurple500 size={30} />,
      title: "Quality Content",
      description:
        "Carefully curated articles that provide real value and actionable insights for developers.",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Expert Community",
      description:
        "Connect with like-minded professionals and learn from experienced practitioners.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="about-box">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-header">Why Choose TechBlog?</div>
        <div className="about-info">
          We're committed to delivering exceptional content that helps you grow as
          a developer.
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="insights-container"
      >
        {insightData.map((item, index) => (
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            className="insight-card" 
            key={index}
          >
            <div className="insight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

