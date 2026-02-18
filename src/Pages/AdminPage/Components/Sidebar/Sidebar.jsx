import React from "react";
import "./Sidebar.css";
import { 
  IoGridOutline, 
  IoAddCircleOutline, 
  IoPeopleOutline, 
  IoSettingsOutline,
  IoLogOutOutline
} from "react-icons/io5";
import { motion } from "framer-motion";

export function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <IoGridOutline /> },
    { id: "create-post", label: "Create Post", icon: <IoAddCircleOutline /> },
    { id: "manage-users", label: "Manage Users", icon: <IoPeopleOutline /> },
    { id: "settings", label: "Settings", icon: <IoSettingsOutline /> },
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">T</div>
        <h3>Admin Panel</h3>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-item ${activeView === item.id ? "active" : ""}`}
            onClick={() => setActiveView(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {activeView === item.id && (
              <motion.div 
                layoutId="active-indicator"
                className="active-indicator" 
              />
            )}
          </motion.div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item logout">
          <IoLogOutOutline className="nav-icon" />
          <span className="nav-label">Logout</span>
        </div>
      </div>
    </div>
  );
}
