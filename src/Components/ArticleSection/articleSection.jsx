import React from "react";
import "./articleSection.css";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export function ArticleSection() {
  return (
    <div className="articleSection-box">
      <div className="articleSection-header">Featured Article</div>
      <div className="articleSection-info">
        Our most popular and impactful content, handpicked for you.
      </div>
      <div className="articleSection-card">
        <div>
          <img
            src="path/to/your-image.jpg"
            alt="Description of image"
            width="300"
            height="200"
          />
        </div>
        <div>
          <div>Technology</div>
          <div>The Future of Web Development: What's Coming in 2024</div>
          <div>
            Explore the latest trends and technologies shaping the future of web
            development, from AI integration to new frameworks.
          </div>
          <div>
            <div className="author-name">
              <FiUser />
              <div>Sarah Chen</div>
            </div>
            <div className="date">
              <SlCalender />
              <div> 1/15/2024</div>
            </div>
            <div className="date">
              <MdOutlineAccessTime />
              <div>8 min read</div>
            </div>
          </div>
          <button>
            <div className="left-space"> Explore Articles</div>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
