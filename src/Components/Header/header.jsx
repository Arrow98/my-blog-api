import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

import { IoBookOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export function Header() {
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
            <div>
              <LuHouse size={20} />
              <div>Home</div>
            </div>
          </div>
          <div>
            <div>
              <IoBookOutline size={20} />
              <div>Blog</div>
            </div>
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
        <div>
          <IoSunnyOutline size={20} />
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
