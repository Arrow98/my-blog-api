import React from "react";
import "./BlogArticleCard.css";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

export function BlogArticleCard({ item, index }) {
  return (
    <div className="blog-lastestArticle-box">
      <div className="blog-lastestArticleSection-card" key={index}>
        <div className="blog-article-image-box">
          <img src={item.image} alt="Description of image" />
        </div>
        <div>
          <div className="blog-article-category">
            <div>{item.category}</div>
            <div>{item.readTime}</div>
          </div>
          <div className="blog-article-title">{item.title}</div>
          <div className="blog-article-description">{item.description}</div>
          <div className="blog-article-creator-box">
            <div>
              <FiUser />
              <div>{item.author}</div>
            </div>
            <div>
              <SlCalender />
              <div>{item.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
