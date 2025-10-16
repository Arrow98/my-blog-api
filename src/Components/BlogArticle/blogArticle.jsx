import "./blogArticle.css";
import { BlogArticleCard } from "../BlogArticleCard/BlogArticleCard";

export function BlogArticle({ finalData }) {
  return (
    <div className="blog-lastestArticleSection-box">
      <BlogArticleCard finalData={finalData} />
    </div>
  );
}
