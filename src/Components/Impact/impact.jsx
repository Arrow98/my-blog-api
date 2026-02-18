import React from "react";
import "./impact.css";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";
import { motion } from "framer-motion";

export function Impact() {
  const statsData = [
    {
      icon: <IoBookOutline size={30} />,
      count: "150+",
      title: "Articles",
      description: "In-depth technical articles",
    },
    {
      icon: <FiUsers size={30} />,
      count: "10K+",
      title: "Readers",
      description: "Active community members",
    },
    {
      icon: <FaArrowTrendUp size={30} />,
      count: "50K+",
      title: "Monthly Views",
      description: "Growing readership",
    },
    {
      icon: <PiMedal size={30} />,
      count: "25+",
      title: "Expert Authors",
      description: "Industry professionals",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="impact-box">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="impact-header">Our Impact</div>
        <div className="impact-info">
          Building a thriving community of developers and tech enthusiasts.
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="impacts-container"
      >
        {statsData.map((item, index) => (
          <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.05 }}
            className="impact-card" 
            key={index}
          >
            <div className="impact-icon">{item.icon}</div>
            <h1>{item.count}</h1>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

