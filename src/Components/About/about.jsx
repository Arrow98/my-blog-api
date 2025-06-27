import React from "react";
import "./about.css";
import { BsStars } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

export function About() {
  const insightData = [
    {
      icon: <BsStars size={30} />,
      title: "Latest Insights",
      description:
        "Stay ahead with cutting-edge technology trends and best practices from industry experts.",
    },
    {
      icon: <MdOutlineStarBorderPurple500 size={30} />,
      title: "Quality Content",
      description:
        "Carefully curated articles that provide real value and actionable insights for developers.",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Expert Community",
      description:
        "Connect with like-minded professionals and learn from experienced practitioners.",
    },
  ];
  return (
    <div className="about-box">
      <div className="about-header">Why Choose TechBlog?</div>
      <div className="about-info">
        We're committed to delivering exceptional content that helps you grow as
        a developer.
      </div>
      <div className="insights-container">
        {insightData.map((item, index) => (
          <div className="insight-card" key={index}>
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
