import React from "react";
import "./lastestArticleSection.css";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

export function LastestArticleSection() {
  const articlesData = [
    {
      image: "https://via.placeholder.com/300x200",
      category: "Architecture",
      title: "Building Scalable Applications with Modern Architecture",
      description:
        "Learn how to design and build applications that can handle millions of users with the right architectural patterns.",
      author: "Mike Johnson",
      date: "1/12/2024",
      readTime: "12 min read",
    },
    {
      image: "https://via.placeholder.com/300x200",
      category: "Development",
      title: "The Art of Code Review: Best Practices for Teams",
      description:
        "Discover effective strategies for conducting code reviews that improve code quality and team collaboration.",
      author: "Emily Rodriguez",
      date: "1/10/2024",
      readTime: "6 min read",
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="lastestArticleSection-box">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lastestArticleSection-header-wrapper"
      >
        <div className="lastestArticleSection-header">Latest Articles</div>
        <div className="lastestArticleSection-info-box">
          <div>Fresh insights and tutorials from our expert contributors.</div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lastestArticleSection-button"
          >
            View All Articles
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="lastestArticle-box"
      >
        {articlesData.map((item, index) => {
          return (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="lastestArticleSection-card" 
              key={index}
            >
              <div className="article-image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="article-content-box">
                <div className="article-category">
                  <div>{item.category}</div>
                  <div>{item.readTime}</div>
                </div>
                <div className="article-title">{item.title}</div>
                <div className="article-description">{item.description}</div>
                <div className="article-creator-box">
                  <div className="creator-details">
                    <FiUser />
                    <div>{item.author}</div>
                  </div>
                  <div className="creator-details">
                    <SlCalender />
                    <div>{item.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

