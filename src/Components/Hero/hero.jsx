import React from "react";
import "./hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

export function Hero() {
  return (
    <div className="hero-box">
      <div>
        <div className="hero-header">
          <div>TechBlog</div>
          <div>Professional</div>
        </div>
        <div className="hero-info">
          Discover cutting-edge insights, expert tutorials, and the latest
          trends in technology and software development.
        </div>
        <div className="hero-buttons">
          <button>
            <div className="left-space"> Explore Articles</div>
            <FaArrowRightLong />
          </button>
          <button>Admin Dashboard</button>
        </div>
      </div>
    </div>
  );
}
