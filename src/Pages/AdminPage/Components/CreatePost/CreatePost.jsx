import React from "react";
import "./CreatePost.css";
import { 
  IoCloudUploadOutline, 
  IoImageOutline, 
  IoListOutline, 
  IoSettingsOutline 
} from "react-icons/io5";
import { motion } from "framer-motion";

export function CreatePost() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="create-post-container"
    >
      <div className="editor-main">
        <div className="editor-header">
          <input type="text" className="title-input" placeholder="Enter your post title..." />
        </div>
        <div className="editor-body">
          <textarea className="content-textarea" placeholder="Start writing your story..."></textarea>
        </div>
        <div className="editor-actions">
          <button className="preview-btn">Preview</button>
          <button className="publish-btn">
            <IoCloudUploadOutline /> Publish Post
          </button>
        </div>
      </div>

      <div className="editor-sidebar">
        <div className="sidebar-section">
          <h3><IoImageOutline /> Featured Image</h3>
          <div className="image-upload-placeholder">
            <span>Click to upload image</span>
          </div>
        </div>

        <div className="sidebar-section">
          <h3><IoListOutline /> Categories</h3>
          <div className="tag-list">
            <span className="tag active">Technology</span>
            <span className="tag">Design</span>
            <span className="tag">Programming</span>
            <span className="tag">News</span>
          </div>
        </div>

        <div className="sidebar-section">
          <h3><IoSettingsOutline /> Post Settings</h3>
          <div className="setting-item">
            <label>Slug</label>
            <input type="text" placeholder="post-url-slug" />
          </div>
          <div className="setting-item">
            <label>Visibility</label>
            <select>
              <option>Public</option>
              <option>Private</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
