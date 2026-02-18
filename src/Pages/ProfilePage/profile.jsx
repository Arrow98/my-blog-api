import React, { useContext } from "react";
import { AppContext } from "../../Components/AppContext";
import "./profile.css";
import { FiUser, FiMail, FiCalendar } from "react-icons/fi";

export function Profile() {
  const { user } = useContext(AppContext);

  if (!user) {
    return (
      <div className="profile-page-error">
        <h2>Please sign in to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FiUser size={50} />
          </div>
          <h1>{user.firstname} {user.lastname}</h1>
          <p className="profile-role">Community Member</p>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <FiMail className="detail-icon" />
            <div className="detail-content">
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>
          </div>
          
          <div className="detail-item">
            <FiUser className="detail-icon" />
            <div className="detail-content">
              <label>Full Name</label>
              <p>{user.firstname} {user.lastname}</p>
            </div>
          </div>

          <div className="detail-item">
            <FiCalendar className="detail-icon" />
            <div className="detail-content">
              <label>Member Since</label>
              <p>February 2026</p>
            </div>
          </div>
        </div>
        
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}
