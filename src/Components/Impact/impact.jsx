import React from "react";
import "./impact.css";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";

export function Impact() {
  const statsData = [
    {
      icon: <IoBookOutline size={30} />,
      count: "150+",
      title: "Articles",
      description: "In-depth technical articles",
    },
    {
      icon: <FiUsers size={30} />,
      count: "10K+",
      title: "Readers",
      description: "Active community members",
    },
    {
      icon: <FaArrowTrendUp size={30} />,
      count: "50K+",
      title: "Monthly Views",
      description: "Growing readership",
    },
    {
      icon: <PiMedal size={30} />,
      count: "25+",
      title: "Expert Authors",
      description: "Industry professionals",
    },
  ];

  return (
    <div className="impact-box">
      <div className="impact-header">Our Impact</div>
      <div className="impact-info">
        Building a thriving community of developers and tech enthusiasts.
      </div>
      <div className="impacts-container">
        {statsData.map((item, index) => (
          <div className="impact-card" key={index}>
            <div>{item.icon}</div>
            <h1>{item.count}</h1>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
