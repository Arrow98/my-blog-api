import React from "react";
import "./articleSection.css";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export function ArticleSection() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="articleSection-box"
    >
      <div className="articleSection-header">Featured Article</div>
      <div className="articleSection-info">
        Our most popular and impactful content, handpicked for you.
      </div>
      
      <motion.div 
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="articleSection-card"
      >
        <div>
          <img
            src="path/to/your-image.jpg"
            alt="Featured Article"
            width="300"
            height="200"
          />
        </div>
        <div>
          <div className="category-label">Technology</div>
          <div className="card-title">The Future of Web Development: What's Coming in 2024</div>
          <div className="card-desc">
            Explore the latest trends and technologies shaping the future of web
            development, from AI integration to new frameworks.
          </div>
          <div className="card-footer">
            <div className="author-name">
              <FiUser />
              <div>Sarah Chen</div>
            </div>
            <div className="date">
              <SlCalender />
              <div> 1/15/2024</div>
            </div>
            <div className="date">
              <MdOutlineAccessTime />
              <div>8 min read</div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/blog")}
          >
            <div className="left-space"> Explore Articles</div>
            <FaArrowRightLong />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

