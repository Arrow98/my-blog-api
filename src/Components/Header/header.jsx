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
  const { theme, toggleTheme, user, logout } = useContext(AppContext);

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
                <LuHouse size={22} />
                <div>Home</div>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="/article-page"
              style={{ textDecoration: "none", color: "inherit" }}
              className="blog-link-box"
            >
              <div className="link-box2">
                <IoBookOutline size={35} />
                <div>Blog</div>
              </div>
            </Link>
          </div>
          {user && user.role === "admin" && (
            <div>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "inherit" }}
                className="admin-link-box"
              >
                <div className="link-box3">
                  <CiSettings size={32} />
                  <div>Admin</div>
                </div>
              </Link>
            </div>
          )}
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
        
        {user && user.email ? (
          <div className="profile-container">
            <div className="profile-btn">
              <FiUser size={18} />
              <span>{user.firstname || "Profile"}</span>
            </div>
            <div className="profile-dropdown">
              <div className="user-info">
                <p className="user-name">{user.firstname} {user.lastname}</p>
                <p className="user-email">{user.email}</p>
              </div>
              <hr />
              <Link to="/profile" className="dropdown-item">
                View Profile
              </Link>
              <div onClick={logout} className="dropdown-item logout">
                Log Out
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="signin-btn">
              <FiUser size={18} />
              <div>Sign In</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
