import React from "react";
import "./header.css";
import { IoBookOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export function Header() {
  return (
    <div className="header-box">
      <div className="nav-box">
        <div className="home-icon-box">
          <div>
            <IoBookOutline size={25} />
          </div>
          <h2>TechBlog</h2>
        </div>
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
          <div>Sign In</div>
        </div>
      </div>
    </div>
  );
}
