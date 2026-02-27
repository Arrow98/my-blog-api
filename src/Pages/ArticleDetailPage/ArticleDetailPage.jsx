import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoChevronBackOutline, IoTimeOutline, IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { AppContext } from "../../Components/AppContext";
import BASE_URL from "../../config";
import { CommentSection } from "./CommentSection";
import { Loader } from "../../Components/Loader/Loader";
import "./ArticleDetailPage.css";

export function ArticleDetailPage() {
  const { id } = useParams();
  const { setIsLoading } = useContext(AppContext);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("techblog_token");

  useEffect(() => {
    console.log("ArticleDetailPage: Initializing fetch for ID:", id);
    if (!token) {
      console.warn("ArticleDetailPage: No token found in localStorage");
      setError("Please sign in to read this article.");
      return;
    }

    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        console.log("ArticleDetailPage: Fetching article from:", `${BASE_URL}/posts/${id}`);
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = await response.json();
        console.log("ArticleDetailPage: Received response:", data);
        
        if (response.ok) {
          // Flexible data extraction to handle various backend response patterns
          let articleData = null;
          
          if (data.data) {
            // Check if it's an array or object
            articleData = Array.isArray(data.data) ? data.data[0] : data.data;
          } else if (data.post) {
            articleData = data.post;
          } else if (data._id || data.title) {
            articleData = data;
          }

          console.log("ArticleDetailPage: Extracted article data:", articleData);
          
          if (articleData && (articleData.title || articleData.content)) {
            setArticle(articleData);
          } else {
            console.error("ArticleDetailPage: Response OK but failed to extract valid article data", data);
            setError("We couldn't find the content for this article. It might have been moved or deleted.");
          }
        } else {
          console.error("ArticleDetailPage: Fetch failed with status:", response.status, data.message);
          setError(data.message || "Failed to fetch article");
        }
      } catch (err) {
        console.error("ArticleDetailPage: Fetch exception:", err);
        setError("An error occurred while loading the article.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
    window.scrollTo(0, 0);
  }, [id, setIsLoading, token]);

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <Link to="/blog" className="back-link">
          <IoChevronBackOutline /> Back to Blog
        </Link>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="article-detail-container"
    >
      <header className="article-detail-header">
        <Link to="/blog" className="back-link">
          <IoChevronBackOutline /> Back to Blog
        </Link>
        
        {article.category && (
          <span className="article-category-badge">{article.category}</span>
        )}
        
        <h1>{article.title}</h1>
        
        <div className="article-meta-info">
          <div className="meta-item">
            <IoPersonOutline />
            <span>{typeof article.author === 'object' ? `${article.author.firstname} ${article.author.lastname}` : article.author}</span>
          </div>
          <div className="meta-item">
            <IoCalendarOutline />
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="meta-item">
            <IoTimeOutline />
            <span>{article.readTime || "5 min read"}</span>
          </div>
        </div>
      </header>

      <div className="article-hero-image">
        <img src={article.image || "https://via.placeholder.com/1200x675"} alt={article.title} />
      </div>

      <div className="article-body-content">
        {article.content}
      </div>

      <div className="article-footer-divider"></div>

      <CommentSection postId={id} />
    </motion.div>
  );
}
