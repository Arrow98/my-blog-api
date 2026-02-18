import React, { useState, useContext } from "react";
import "./AdminPage.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { DashboardOverview } from "./Components/DashboardOverview/DashboardOverview";
import { CreatePost } from "./Components/CreatePost/CreatePost";
import { ManageUsers } from "./Components/ManageUsers/ManageUsers";
import { SiteSettings } from "./Components/SiteSettings/SiteSettings";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "../../Components/AppContext";
import { Navigate } from "react-router-dom";

export function AdminPage() {
  const { user } = useContext(AppContext);
  const [activeView, setActiveView] = useState("dashboard");

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardOverview />;
      case "create-post":
        return <CreatePost />;
      case "manage-users":
        return <ManageUsers />;
      case "settings":
        return <SiteSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="admin-main-content">
        <header className="admin-content-header">
          <div className="header-text">
            <h1>{activeView.charAt(0).toUpperCase() + activeView.slice(1).replace("-", " ")}</h1>
            <p>Admin Dashboard / {activeView}</p>
          </div>
          <div className="admin-profile">
            <div className="profile-info">
              <span>Admin User</span>
              <p>Super Admin</p>
            </div>
            <div className="profile-avatar">A</div>
          </div>
        </header>

        <section className="content-viewport">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

