import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaFishFins } from "react-icons/fa6";
import { useState } from "react";

export function ProfileModal() {
  return (
    <>
      <div
        className="fixed top-11 right-8 z-50 my-11 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        id="dropdown"
      >
        <div className="py-3 px-4">
          <span className="block text-sm font-semibold text-gray-900 dark:text-white">
            Neil sims
          </span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul
          className="py-1 text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              My profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              Account settings
            </a>
          </li>
        </ul>
        <ul
          className="py-1 text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              My likes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {" "}
                <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
              </svg>
              Collections
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span className="flex items-center">
                <svg
                  className="mr-2 w-4 h-4 text-primary-600 dark:text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                </svg>
                Pro version
              </span>
              <svg
                className="w-2.5 h-2.5 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
        <ul
          className="py-1 text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <Link
              onClick={removeToken}
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Navbar({ token }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
      <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Link to="" className="flex ms-2 md:me-24">
                <IconContext.Provider
                  value={{
                    color: "gray",
                    size: 35,
                    className: "hidden lg:flex text-center",
                  }}
                >
                  <FaFishFins />
                </IconContext.Provider>
                <span className="ml-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Aquaculture
                </span>
              </Link>
            </div>
            {token ? (
              <>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </motion.a>
              </>
            ) : (
              <>
                <div className="flex">
                  <motion.a
                    href="/login"
                    whileTap={{ scale: 0.9 }}
                    className="hidden md:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Log in
                  </motion.a>
                  <motion.a
                    href="/register"
                    whileTap={{ scale: 0.9 }}
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Get started
                  </motion.a>
                </div>
              </>
            )}
            {isOpen && <ProfileModal />}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
