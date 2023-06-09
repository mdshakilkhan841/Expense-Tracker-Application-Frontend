import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdLibraryAdd } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { GoThreeBars, GoSearch } from "react-icons/go";

const Navbar = () => {
    const [isUserMenuVisible, setUserMenuVisible] = useState(false);
    const [isNavMenuVisible, setNavMenuVisible] = useState(false);
    const appRef = useRef(null);
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    const handleUserButtonClick = () => {
        setUserMenuVisible((prevState) => !prevState);
    };

    const handleNavToggleClick = () => {
        setNavMenuVisible((prevState) => !prevState);
    };

    const handleOutsideClick = (e) => {
        if (!appRef.current.contains(e.target)) {
            setUserMenuVisible(false);
            setNavMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

    return (
        <nav className="bg-white fixed w-full z-10 top-0 shadow" ref={appRef}>
            <div className="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 px-5">
                <div className="w-1/2 pl-2 md:pl-0">
                    <Link to={"/"}>
                        <div className="text-gray-900 text-base xl:text-xl font-bold cursor-pointer">
                            Expense Tracker Application
                        </div>
                    </Link>
                </div>

                <div className="w-1/2 pr-0">
                    <div className="flex relative float-right">
                        <div className="relative text-sm">
                            <button
                                className="flex items-center focus:outline-none mr-3"
                                onClick={handleUserButtonClick}
                            >
                                <img
                                    className="w-8 h-8 rounded-full mr-3"
                                    src="http://i.pravatar.cc/300"
                                    alt="Avatar of User"
                                />
                                <span className="hidden md:inline-block mr-2">Shakil Khan</span>
                                <FiChevronDown />
                            </button>
                            <div
                                className={
                                    isUserMenuVisible
                                        ? "bg-white rounded shadow-md mt-12 absolute top-0 right-0 min-w-full overflow-auto z-30"
                                        : "absolute invisible"
                                }
                            >
                                <ul className="list-reset">
                                    <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                        My account
                                    </li>
                                    <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                        Notifications
                                    </li>
                                    <li>
                                        <hr className="border-t mx-2 border-gray-400" />
                                    </li>
                                    <li className="px-4 py-2 block text-gray-900 hover:bg-gray-200  hover: cursor-pointer">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="block lg:hidden pr-4">
                            <button
                                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
                                onClick={handleNavToggleClick}
                            >
                                <GoThreeBars />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white z-20 ${isNavMenuVisible ? "" : "hidden"
                        }`}
                >
                    <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0 font-semibold">
                        <li>
                            <Link
                                to={"/"}
                                className={`flex items-center space-x-3 mr-6 my-2 md:my-0 py-1 md:py-3 pl-1 align-middle text-gray-500 hover:text-gray-900 cursor-pointer hover:border-orange-500 ${activePage === "/"
                                        ? "border-b-2 border-orange-500"
                                        : "border-b-2 border-white"
                                    }`}
                            >
                                <MdLibraryAdd />
                                <span className="pb-1 md:pb-0 text-sm">Add Expense</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/expense-list"}
                                className={`flex items-center space-x-3 mr-6 my-2 md:my-0 py-1 md:py-3 pl-1 align-middle text-gray-500 hover:text-gray-900 cursor-pointer hover:border-pink-500 ${activePage === "/expense-list"
                                        ? "border-b-2 border-pink-500"
                                        : "border-b-2 border-white"
                                    }`}
                            >
                                <FaListUl />
                                <span className="pb-1 md:pb-0 text-sm">Expense List</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/expense-report"}
                                className={`flex items-center space-x-3 mr-6 my-2 md:my-0 py-1 md:py-3 pl-1 align-middle text-gray-500 hover:text-gray-900 cursor-pointer hover:border-purple-500 ${activePage === "/expense-report"
                                        ? "border-b-2 border-purple-500"
                                        : "border-b-2 border-white"
                                    }`}
                            >
                                <CgNotes />
                                <span className="pb-1 md:pb-0 text-sm">Report</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/category-report"}
                                className={`flex items-center space-x-3 mr-6 my-2 md:my-0 py-1 md:py-3 pl-1 align-middle text-gray-500 hover:text-gray-900 cursor-pointer hover:border-green-500 ${activePage === "/category-report"
                                        ? "border-b-2 border-green-500"
                                        : "border-b-2 border-white"
                                    }`}
                            >
                                <AiOutlinePieChart />
                                <span className="pb-1 md:pb-0 text-sm">Category Report</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/forecasted-expenses"}
                                className={`flex items-center space-x-3 mr-6 my-2 md:my-0 py-1 md:py-3 pl-1 align-middle text-gray-500 hover:text-gray-900 cursor-pointer hover:border-red-500 ${activePage === "/forecasted-expenses"
                                        ? "border-b-2 border-red-500"
                                        : "border-b-2 border-white"
                                    }`}
                            >
                                <IoStatsChartSharp />
                                <span className="pb-1 md:pb-0 text-sm">Forecasted</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="relative pull-right pl-4 pr-4 md:pr-0">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                        />
                        <div className="absolute top-[0.375rem] left-[1.75rem]">
                            <GoSearch />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
