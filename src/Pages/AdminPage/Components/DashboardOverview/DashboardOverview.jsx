import React from "react";
import "./DashboardOverview.css";
import { 
  IoDocumentTextOutline, 
  IoPeopleOutline, 
  IoStatsChartOutline, 
  IoShieldCheckmarkOutline 
} from "react-icons/io5";
import { motion } from "framer-motion";

export function DashboardOverview() {
  const stats = [
    { label: "Total Posts", value: "124", icon: <IoDocumentTextOutline />, color: "#6366f1" },
    { label: "Total Users", value: "1,234", icon: <IoPeopleOutline />, color: "#a855f7" },
    { label: "Total Views", value: "45.2k", icon: <IoStatsChartOutline />, color: "#ec4899" },
    { label: "System Status", value: "Healthy", icon: <IoShieldCheckmarkOutline />, color: "#10b981" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-overview"
    >
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card"
          >
            <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="overview-content">
        <div className="content-card recent-activity">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <button className="view-all">View All</button>
          </div>
          <div className="activity-list">
            {[
              { time: "10:30 AM", user: "Admin", action: "Published", Target: "React Hooks Guide", avatar: "A" },
              { time: "09:15 AM", user: "JohnDoe", action: "Registered", Target: "New Account", avatar: "J" },
              { time: "Yesterday", user: "System", action: "Completed", Target: "Daily Maintenance", avatar: "S" },
            ].map((item, idx) => (
              <div key={idx} className="activity-item">
                <div className="user-avatar">{item.avatar}</div>
                <div className="activity-info">
                  <p><strong>{item.user}</strong> {item.action} <span>{item.Target}</span></p>
                  <span className="activity-time">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card analytics-summary">
          <div className="card-header">
            <h3>Analytics Summary</h3>
          </div>
          <div className="placeholder-chart">
            <div className="bar" style={{ height: "40%" }}></div>
            <div className="bar" style={{ height: "70%" }}></div>
            <div className="bar" style={{ height: "50%" }}></div>
            <div className="bar" style={{ height: "90%" }}></div>
            <div className="bar" style={{ height: "60%" }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
