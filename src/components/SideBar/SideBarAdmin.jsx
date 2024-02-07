import React from "react";
import { IconContext } from "react-icons";
import {
  FaAngleDown,
  FaChartPie,
  FaClipboardList,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const iconStyle =
  "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";

export default function SideBarAdmin() {
  const location = useLocation();
  const modalRef = useRef();

  // useEffect(() => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     onClose();
  //   }
  //   const handleClickOutside = (event) => {};

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);

  return (
    <>
      <aside className="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/dashboard"
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }`}
              >
                <IconContext.Provider value={{ className: iconStyle }}>
                  <FaChartPie />
                </IconContext.Provider>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="user"
                type="button"
                className={`flex items-center w-full p-2 text-base rounded-lg ${
                  location.pathname === "/dashboard/user"
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }`}
              >
                <IconContext.Provider value={{ className: iconStyle }}>
                  <FaUser />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    User
                  </span>
                </IconContext.Provider>
              </Link>
            </li>
            <li ref={modalRef} onClose={() => setIsActivityDpOpen(false)}>
              <Link
                to="activity"
                type="button"
                className={`flex items-center w-full p-2 text-base rounded-lg ${
                  location.pathname === "/dashboard/activity"
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }`}
              >
                <IconContext.Provider value={{ className: iconStyle }}>
                  <FaClipboardList />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Activity
                  </span>
                </IconContext.Provider>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
