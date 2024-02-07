import React from "react";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChartPie,
  FaEllipsisH,
  FaFilter,
  FaPlus,
} from "react-icons/fa";
import FilterDropdown from "./FilterDropdown";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect } from "react";
import CreateUser from "./CreateUser";
import { deleteUserApi, findAllUserApi } from "../../../api/UserApi";
import DeleteConfirm from "../../alerts/DeleteConfirm";
import UpdateUser from "./UpdateUser";

export default function UserMenu() {
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false);
  const [filterDp, setFilterDp] = useState(false);
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function ChangeFilterDropdown() {
    setFilterDp(!filterDp);
  }

  async function handlePageIncrease() {
    if (page >= totalPages) {
      return;
    }
    setPage((page) => page + 1);
    await fetchUsers(page); //
  }

  async function handlePageDecrease() {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
    await fetchUsers(page); //
  }

  async function fetchUsers(page) {
    try {
      const result = await findAllUserApi(page);
      console.log(page);
      setTotalPages(result.data.users.totalPages);
      setUsers(result.data.users.users);
    } catch (error) {
      throw error;
    }
  }

  async function handleDelete(userId) {
    try {
      setIsDeleteConfirm(false);
      setUserId(null);
      await deleteUserApi(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {}
  }

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const renderPaginationLinks = () => {
    const links = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i > 1 && i < totalPages - 1 && Math.abs(i - page) > 2) {
        links.push(
          <li key={`ellipsis${i}`}>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
        );
        continue;
      }

      links.push(
        <li key={i}>
          <a
            href="#"
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
              i === page
                ? "text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            onClick={() => {
              setPage(i), fetchUsers(page);
            }}
          >
            {i}
          </a>
        </li>
      );
    }

    return links;
  };

  return (
    <>
      {isCreateUserOpen && (
        <CreateUser
          onClose={() => setIsCreateUserOpen(false)}
          onSubmit={() => {
            setIsCreateUserOpen(false), fetchUsers(page);
          }}
        />
      )}
      {isUpdateUserOpen && (
        <UpdateUser
          userId={userId}
          onSubmit={() => {
            setIsUpdateUserOpen(false), fetchUsers(page);
          }}
          onClose={() => setIsUpdateUserOpen(false)}
        />
      )}
      <div>
        {/* Title and Breadcrumb */}
        <div className="flex justify-between">
          <h1 className="dark:text-gray-400 text-3xl pb-3 font-bold">User</h1>

          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <IconContext.Provider
                    value={{ className: "mr-1.5", size: 15 }}
                  >
                    <FaChartPie />
                  </IconContext.Provider>
                  Dashboard
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IconContext.Provider value={{ color: "gray " }}>
                      <FaSearch />
                    </IconContext.Provider>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                onClick={() => setIsCreateUserOpen(true)}
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <IconContext.Provider value={{ className: "mr-2" }}>
                  <FaPlus />
                </IconContext.Provider>
                Add User
              </button>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  id="filterDropdownButton"
                  onClick={ChangeFilterDropdown}
                  data-dropdown-toggle="filterDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  <IconContext.Provider value={{ className: "mr-2" }}>
                    <FaFilter />
                  </IconContext.Provider>
                  Filter
                  <IconContext.Provider value={{ className: "ml-2" }}>
                    <FaAngleDown />
                  </IconContext.Provider>
                </button>
                {filterDp && <FilterDropdown />}
              </div>
            </div>
          </div>

          {/* User List */}

          <div className="overflow-x-auto ">
            {isDeleteConfirm && (
              <DeleteConfirm
                onClose={() => {
                  setIsDeleteConfirm(false), setUserId(null);
                }}
                confirmDelete={() => handleDelete(userId)}
              />
            )}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th colSpan={2} className="px-4 py-3 text-center">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={item.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {index + 1 + (page - 1) * 10}
                    </td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.role} </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          setUserId(item.id);
                          setIsUpdateUserOpen(true);
                        }}
                        className=" text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          setUserId(item.id);
                          setIsDeleteConfirm(true);
                        }}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Page Navigation */}

          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                {totalPages}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li onClick={handlePageDecrease}>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <IconContext.Provider value={{ size: 18 }}>
                    <FaAngleLeft />
                  </IconContext.Provider>
                </a>
              </li>
              {renderPaginationLinks()}
              <li onClick={handlePageIncrease}>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <IconContext.Provider value={{ size: 18 }}>
                    <FaAngleRight />
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
