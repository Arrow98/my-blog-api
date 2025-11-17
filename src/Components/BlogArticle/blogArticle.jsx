import "./blogArticle.css";
import { BlogArticleCard } from "../BlogArticleCard/BlogArticleCard";

export function BlogArticle({ finalData }) {
  return (
    <div className="blog-lastestArticleSection-box">
      {finalData.map((item, index) => {
        return <BlogArticleCard item={item} index={index} />;
      })}
    </div>
  );
}
