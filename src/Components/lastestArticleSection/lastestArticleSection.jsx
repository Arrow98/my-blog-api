import React from "react";
import "./lastestArticleSection.css";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

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

  return (
    <div className="lastestArticleSection-box">
      <div className="lastestArticleSection-header">Latest Articles</div>
      <div className="lastestArticleSection-info-box">
        <div>Fresh insights and tutorials from our expert contributors.</div>
        <button className="lastestArticleSection-button">
          View All Articles
        </button>
      </div>
      <div className="lastestArticle-box">
        {articlesData.map((item, index) => {
          return (
            <div className="lastestArticleSection-card" key={index}>
              <div className="article-image-box">
                <img src={item.image} alt="Description of image" />
              </div>
              <div>
                <div className="article-category">
                  <div>{item.category}</div>
                  <div>{item.readTime}</div>
                </div>
                <div className="article-title">{item.title}</div>
                <div className="article-description">{item.description}</div>
                <div className="article-creator-box">
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
          );
        })}
      </div>
    </div>
  );
}
