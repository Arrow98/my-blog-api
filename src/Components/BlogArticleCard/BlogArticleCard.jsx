import React from "react";
import "./BlogArticleCard.css";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

export function BlogArticleCard({ item }) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="blog-article-card-wrapper"
    >
      <div className="blog-article-image-box">
        <img src={item.image || "https://via.placeholder.com/400x250"} alt={item.title} />
        {item.category && <span className="category-badge">{item.category}</span>}
      </div>
      <div className="blog-article-content">
        <div className="blog-article-meta-top">
          <span>{item.readTime || "5 min read"}</span>
        </div>
        <h3 className="blog-article-title">{item.title}</h3>
        <p className="blog-article-description">
          {item.description || item.content?.substring(0, 100) + "..."}
        </p>
        <div className="blog-article-footer">
          <div className="footer-item">
            <FiUser size={14} />
            <span>{item.author || "TechBlog Staff"}</span>
          </div>
          <div className="footer-item">
            <SlCalender size={14} />
            <span>{item.date ? new Date(item.date).toLocaleDateString() : "Recently"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
