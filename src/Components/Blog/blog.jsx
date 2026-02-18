// BlogSection.jsx
import React from "react";
import "./blog.css";
import { BookOpen } from "lucide-react";

const BlogSection = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-icon">
          <BookOpen size={36} />
        </div>
        <h1 className="blog-title">Blog</h1>
        <p className="blog-description">
          Discover insights, tutorials, and the latest trends in technology and
          development from industry experts.
        </p>
      </div>
    </div>
  );
};

export default BlogSection;
