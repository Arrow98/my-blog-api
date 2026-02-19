import "./articlePage.css";
import BlogSection from "../../Components/Blog/blog";
import ArticleSearchBox from "../../Components/ArticleSearchBox/articleSearchBox";
import { BlogArticle } from "../../Components/BlogArticle/blogArticle";
import { useEffect, useState, useContext } from "react";
import BASE_URL from "../../config";
import { motion } from "framer-motion";
import { AppContext } from "../../Components/AppContext";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { getCategories } from "../../Services/categories";

export function ArticlePage() {
  const [getData, setGetData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const { setIsLoading } = useContext(AppContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    
    // Fetch both posts and categories
    Promise.all([
      fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(res => res.json()),
      getCategories()
    ])
    .then(([postsData, categoriesData]) => {
      const posts = postsData.data || [];
      const cats = categoriesData.data || [];
      
      // Map post category IDs to their titles
      const enrichedPosts = posts.map(post => {
        const categoryMatch = cats.find(c => c._id === post.category);
        return {
          ...post,
          category: categoryMatch ? categoryMatch.title : post.category
        };
      });
      
      setGetData(enrichedPosts);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching articles or categories:", error);
      setIsLoading(false);
    });
  }, [setIsLoading, token]);

  useEffect(() => {
    setFinalData(getData);
  }, [getData]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="article-page"
    >
      <BlogSection />
      <ArticleSearchBox setFinalData={setFinalData} getData={getData} />
      <div className="articles-container">
        <BlogArticle finalData={finalData} />
      </div>

      <Link to="/add-post" className="add-post-fab">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <IoAddOutline size={30} />
          <span className="fab-tooltip">Add Post</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
