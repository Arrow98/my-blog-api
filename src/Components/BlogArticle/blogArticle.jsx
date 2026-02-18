import "./blogArticle.css";
import { BlogArticleCard } from "../BlogArticleCard/BlogArticleCard";
import { motion } from "framer-motion";

export function BlogArticle({ finalData }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="blog-articles-grid"
    >
      {finalData.length > 0 ? (
        finalData.map((item, index) => (
          <BlogArticleCard key={item._id || index} item={item} index={index} />
        ))
      ) : (
        <div className="no-results">No articles found matching your criteria.</div>
      )}
    </motion.div>
  );
}
