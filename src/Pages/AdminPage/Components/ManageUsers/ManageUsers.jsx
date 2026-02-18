import React from "react";
import "./ManageUsers.css";
import { 
  IoEllipsisHorizontal, 
  IoShieldOutline, 
  IoMailOutline, 
  IoPersonAddOutline 
} from "react-icons/io5";
import { motion } from "framer-motion";

export function ManageUsers() {
  const users = [
    { id: 1, name: "Antigravity", email: "anti@gravity.com", role: "Super Admin", status: "Active", initials: "AG" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active", initials: "JS" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "User", status: "Inactive", initials: "BW" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Contributor", status: "Active", initials: "AB" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="manage-users-container"
    >
      <div className="table-header-actions">
        <h2>User Management</h2>
        <button className="add-user-btn">
          <IoPersonAddOutline /> Add New User
        </button>
      </div>

      <div className="users-table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar-small">{user.initials}</div>
                    <div className="user-meta">
                      <span className="user-name">{user.name}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="role-chip">
                    <IoShieldOutline /> {user.role}
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons-group">
                    <button className="action-icon-btn"><IoMailOutline /></button>
                    <button className="action-icon-btn"><IoEllipsisHorizontal /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
