import React from "react";
import "./AdminPage.css";
import { IoStatsChart, IoPeople, IoDocumentText, IoSettings } from "react-icons/io5";

export function AdminPage() {
  return (
    <div className="admin-page">
      <div className="admin-header fade-in-down">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card fade-in-up delay-1">
          <div className="icon-box">
            <IoDocumentText size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Posts</h3>
            <p>124</p>
          </div>
        </div>
        <div className="stat-card fade-in-up delay-2">
          <div className="icon-box">
            <IoPeople size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
        </div>
        <div className="stat-card fade-in-up delay-3">
          <div className="icon-box">
            <IoStatsChart size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Views</h3>
            <p>45.2k</p>
          </div>
        </div>
        <div className="stat-card fade-in-up delay-4">
          <div className="icon-box">
            <IoSettings size={24} />
          </div>
          <div className="stat-info">
            <h3>System Status</h3>
            <p>Healthy</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="recent-activity fade-in-up delay-5">
          <h2>Recent Activity</h2>
          <ul>
            <li>
              <span className="activity-time">10:30 AM</span>
              <span className="activity-desc">New post "React Hooks Guide" published.</span>
            </li>
            <li>
              <span className="activity-time">09:15 AM</span>
              <span className="activity-desc">User "JohnDoe" registered.</span>
            </li>
            <li>
              <span className="activity-time">Yesterday</span>
              <span className="activity-desc">System maintenance completed.</span>
            </li>
          </ul>
        </div>

        <div className="quick-actions fade-in-up delay-6">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="admin-btn">Create New Post</button>
            <button className="admin-btn">Manage Users</button>
            <button className="admin-btn">Site Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
