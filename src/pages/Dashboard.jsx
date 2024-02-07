import React from "react";
import SideBarAdmin from "../components/SideBar/SideBarAdmin";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardMenu from "../components/admin/DashboardMenu";
import UserMenu from "../components/admin/users/UserMenu";
import { Routes, Route } from "react-router-dom";
import ActivityMenu from "../components/admin/activity/ActivityMenu";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(null);
  const admin = localStorage.getItem("admin");

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("authenticated");
    localStorage.setItem("admin", true);
    setAuthenticated(token);
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen pb-10">
        {admin ? (
          <>
            <SideBarAdmin />
            <div className="sm:ml-72 sm:mr-8 pt-20 min-h-full">
              <Routes>
                <Route index Component={DashboardMenu} />
                <Route path="user" Component={UserMenu} />
                <Route path="activity" Component={ActivityMenu} />
              </Routes>
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <SideBarAdmin />
            <div className="sm:ml-72 sm:mr-8 pt-16 min-h-screen">
              <Routes>
                <Route index Component={DashboardMenu} />
                <Route path="user" Component={UserMenu} />
              </Routes>
              <Outlet />
            </div>
          </>
        )}
      </div>
    </>
  );
}
