import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import logo from "../../images/pics/Logo.png";
import './nav.css';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [showPrev, setShowPrev] = useState(true);
    const [showNext, setShowNext] = useState(true);

    // Toggle menu visibility
    const handleClick = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);

    // Update button visibility based on the current route
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/") {
            setShowPrev(false); // Hide Previous on Home
            setShowNext(true);  // Show Next
        } else if (currentPath === "/about") {
            setShowPrev(true);  // Show Previous
            setShowNext(true);  // Show Next
        } else if (currentPath === "/services") {
            setShowPrev(true);  // Show Previous
            setShowNext(true);  // Show Next
        } else if (currentPath === "/sales") {
            setShowPrev(true);  // Show Previous
            setShowNext(false); // Hide Next on Contact
        } else if (currentPath === "/help") {
            setShowPrev(true);  // Show Previous
            setShowNext(false); // Hide Next on Help
        } else if (currentPath.startsWith("/servicePage")) {
            setShowPrev(true);  // Show Previous
            setShowNext(true);  // Show Next
        }
    }, [location]);

    const handlePrevious = () => {
        const currentPath = location.pathname;
        if (currentPath === "/about") navigate("/");
        else if (currentPath === "/services") navigate("/about");
        else if (currentPath === "/sales") navigate("/services");
        else if (currentPath === "/help") navigate("/services"); // Navigate to /services from /help
        else if (currentPath.startsWith("/servicePage")) navigate("/services");
    };

    const handleNext = () => {
        const currentPath = location.pathname;
        if (currentPath === "/") navigate("/about");
        else if (currentPath === "/about") navigate("/services");
        else if (currentPath === "/services") navigate("/sales");
        else if (currentPath.startsWith("/servicePage")) navigate("/services");
    };

    return (
        <>
            <nav className="bg-white border-gray-200 py-2.5 sticky top-0 z-50">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 sm:h-[5rem] h-[20px]" alt="Logo" />
                    </Link>

                    {/* Mobile menu toggle */}
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={handleClick}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Menu */}
                    <div className={`lg:flex items-center justify-between w-full lg:w-auto ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0 text-center sm:text-none text-xl">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={handleClose}
                                    className={({ isActive }) => `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'text-green-600 underline decoration-4 underline-offset-8' : 'text-gray-700'}`}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={handleClose}
                                    className={({ isActive }) => `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'text-green-600 underline decoration-4 underline-offset-8' : 'text-gray-700'}`}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    onClick={handleClose}
                                    className={({ isActive }) => `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'text-green-600 underline decoration-4 underline-offset-8' : 'text-gray-700'}`}
                                >
                                    Specialization
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/sales"
                                    onClick={handleClose}
                                    className={({ isActive }) => `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${isActive ? 'text-green-600 underline decoration-4 underline-offset-8' : 'text-gray-700'}`}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="py-3 bg-green-500 text-black text-center px-10 relative z-60">
                {/* Previous Button */}
                {showPrev && (
                    <button
                        onClick={handlePrevious}
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black"
                    >
                        <IoMdArrowBack />
                    </button>
                )}

                {/* Centered Text */}
                <div className="flex justify-center items-center text-sm mt-2">
                    <p className="text-3xl sm:text-3xl ml-10" style={{ fontFamily: 'Algerian, sans-serif' }}>
                        ENHANCING IT SECURITY & NETWORKS
                    </p>
                </div>

                {/* Next Button */}
                {showNext && (
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black"
                    >
                        <IoMdArrowBack style={{ transform: "rotate(180deg)" }} />
                    </button>
                )}
            </section>
        </>
    );
};

export default NavBar;
