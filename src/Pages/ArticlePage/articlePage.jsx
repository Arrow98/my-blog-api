import "./articlePage.css";
import { Header } from "../../Components/Header/header";
import BlogSection from "../../Components/Blog/blog";
import ArticleSearchBox from "../../Components/ArticleSearchBox/articleSearchBox";
import { BlogArticle } from "../../Components/BlogArticle/blogArticle";
import { Footer } from "../../Components/Footer/footer";
import { useEffect, useState } from "react";
import BASE_URL from "../../config";

export function ArticlePage() {
  const [getData, setGetData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${BASE_URL}/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGetData(data.data);
      });
  }, []);

  useEffect(() => {
    setFinalData(getData);
  }, [getData]);

  return (
    <div className="article-page">
      <BlogSection />
      <ArticleSearchBox setFinalData={setFinalData} getData={getData} />
      <BlogArticle finalData={finalData} />
    </div>
  );
}
