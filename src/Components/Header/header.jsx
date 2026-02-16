import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { AppContext } from "../AppContext";

export function Header() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="header-box">
      <div className="nav-box">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="home-icon-box">
            <div>
              <IoBookOutline size={25} />
            </div>
            <h2>TechBlog</h2>
          </div>
        </Link>

        <div className="link-box">
          <div>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="home-link-box"
            >
              <div className="link-box11">
                <LuHouse size={20} />
                <div>Home</div>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="/articlePage"
              style={{ textDecoration: "none", color: "inherit" }}
              className="blog-link-box"
            >
              <div className="link-box2">
                <IoBookOutline size={20} />
                <div>Blog</div>
              </div>
            </Link>
          </div>
          <div>
            <div>
              <CiSettings size={20} />
              <div>Admin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-in-box">
        <div onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? (
            <IoMoonOutline size={20} />
          ) : (
            <IoSunnyOutline size={20} />
          )}
        </div>
        <div>
          <div>
            <FiUser />
          </div>

          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>Sign In</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
