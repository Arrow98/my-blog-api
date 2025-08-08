import React from "react";
import "./footer.css"; // Make sure this CSS file is created

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-top">
          <div className="footer-logo">
            <div className="footer-icon"></div>
            <span>TechBlog</span>
          </div>
          <p>A modern blogging platform for developers and tech enthusiasts.</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">© 2024 TechBlog. All rights reserved.</div>
    </footer>
  );
}
