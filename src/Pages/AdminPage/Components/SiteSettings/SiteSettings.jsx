import React from "react";
import "./SiteSettings.css";
import { 
  IoGlobeOutline, 
  IoLockClosedOutline, 
  IoColorPaletteOutline, 
  IoSaveOutline 
} from "react-icons/io5";
import { motion } from "framer-motion";

export function SiteSettings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="site-settings-container"
    >
      <div className="settings-grid">
        <div className="settings-section">
          <div className="section-header">
            <IoGlobeOutline /> <h3>General Configuration</h3>
          </div>
          <div className="settings-form">
            <div className="setting-field">
              <label>Site Title</label>
              <input type="text" defaultValue="TechBlog" />
            </div>
            <div className="setting-field">
              <label>Tagline</label>
              <input type="text" defaultValue="Exploring the frontier of technology" />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <IoLockClosedOutline /> <h3>Security & Privacy</h3>
          </div>
          <div className="settings-form">
            <div className="toggle-field">
              <div className="toggle-info">
                <span>Public Registration</span>
                <p>Allow anyone to create an account</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="toggle-field">
              <div className="toggle-info">
                <span>Maintenance Mode</span>
                <p>Hide site content while working</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <IoColorPaletteOutline /> <h3>Appearance</h3>
          </div>
          <div className="settings-form">
            <div className="setting-field">
              <label>Primary Color</label>
              <div className="color-picker-placeholder">
                <div className="color-preview" style={{ background: "#6366f1" }}></div>
                <span>#6366f1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="save-settings-btn"
        >
          <IoSaveOutline /> Save Changes
        </motion.button>
      </div>
    </motion.div>
  );
}
