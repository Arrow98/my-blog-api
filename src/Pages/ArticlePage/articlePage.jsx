import "./articlePage.css";
import BlogSection from "../../Components/Blog/blog";
import ArticleSearchBox from "../../Components/ArticleSearchBox/articleSearchBox";
import { BlogArticle } from "../../Components/BlogArticle/blogArticle";
import { useEffect, useState, useContext } from "react";
import BASE_URL from "../../config";
import { motion } from "framer-motion";
import { AppContext } from "../../Components/AppContext";

export function ArticlePage() {
  const [getData, setGetData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const { setIsLoading } = useContext(AppContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGetData(data.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
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
    </motion.div>
  );
}
