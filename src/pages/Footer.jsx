import React, { useEffect, useState } from "react";
import Logo from "../images/EXCEED LOGO.png";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/") {
            setShowPrev(false);
            setShowNext(true);
        } else if (currentPath === "/about") {
            setShowPrev(true);
            setShowNext(true);
        } else if (currentPath === "/services") {
            setShowPrev(true);
            setShowNext(true);
        } else if (currentPath === "/sales" || currentPath === "/help") {
            setShowPrev(true);
            setShowNext(false);
        } else if (currentPath.startsWith("/servicePage")) {
            setShowPrev(true);
            setShowNext(true);
        }
    }, [location]);

    const handlePrevious = () => {
        const currentPath = location.pathname;
        if (currentPath === "/about") navigate("/");
        else if (currentPath === "/services") navigate("/about");
        else if (currentPath === "/sales") navigate("/services");
        else if (currentPath === "/help") navigate("/services");
        else if (currentPath.startsWith("/servicePage")) navigate("/services");
    };

    const handleNext = () => {
        const currentPath = location.pathname;
        if (currentPath === "/") navigate("/about");
        else if (currentPath === "/about") navigate("/services");
        else if (currentPath === "/services") navigate("/sales");
        else if (currentPath.startsWith("/servicePage")) navigate("/services");
    };

    const FooterLinks = ({ title, links }) => (
        <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">{title}</h4>
            <ul className="text-sm transition-all duration-500">
                {links.map((link, index) => (
                    <li key={index} className="mb-6">
                        <a href={link.url} className="text-white">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <section className="py-3 bg-green-500 font-bold text-black text-right px-10 relative">
                {/* Previous Button */}
                {showPrev && (
                    <button
                        onClick={handlePrevious}
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black"
                    >
                        <IoMdArrowBack aria-label="Go to the previous page" />
                    </button>
                )}

                {/* Next Button */}
                {showNext && (
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black"
                    >
                        <IoMdArrowForward aria-label="Go to the next page" />
                    </button>
                )}

                <div className="flex flex-col items-center md:flex-row justify-evenly text-sm ml-14">
                    <p>
                        <strong>Mobile: </strong>+97155 305 3964
                    </p>
                    <p>
                        <strong>Email: </strong>enquiries@exceednetsec.com
                    </p>
                    <p>
                        <strong>
                            Web: <a href="http://www.exceednetsec.com">http://www.exceednetsec.com</a>
                        </strong>
                    </p>
                </div>
            </section>

            <footer className="w-full bg-gray-700">
                <div className="mx-auto max-w-8xl px-6 lg:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <div className="bg-white rounded-md w-[285px] mb-10">
                                <img src={Logo} alt="Exceed Logo" />
                            </div>
                            <div className="flex mt-4 space-x-8 justify-center lg:justify-start sm:mt-0">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaTwitter className="text-white text-4xl" />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaInstagram className="text-white text-4xl" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/exceed-netsec-computer-llc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <GrLinkedin className="text-white text-4xl" />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaYoutube className="text-white text-4xl" />
                                </a>
                            </div>
                        </div>

                        <FooterLinks
                            title="Pages"
                            links={[
                                { label: "Home", url: "/" },
                                { label: "About Us", url: "/about" },
                                { label: "Help Desk", url: "/help" },
                                { label: "Contact", url: "/help" },
                            ]}
                        />
                        <FooterLinks
                            title="Contact"
                            links={[
                                { label: "Tel: +971 55 305 3964", url: "tel:+971553053964" },
                                { label: "enquiries@exceedme.com", url: "mailto:enquiries@exceedme.com" },
                                { label: "helpdesk@exceedme.com", url: "mailto:helpdesk@exceedme.com" },
                                {
                                    label: "Office #212, Arzoo Building, AI Quasis 2, Dubai, UAE.",
                                    url: "javascript:;",
                                },
                            ]}
                        />
                        <FooterLinks
                            title="Key Solutions"
                            links={[
                                { label: "Mail Security", url: "javascript:;" },
                                { label: "Multi Layer Firewall", url: "javascript:;" },
                                { label: "e-Mail Archiving", url: "javascript:;" },
                                { label: "DR/Backup", url: "javascript:;" },
                            ]}
                        />

                        <div className="lg:mx-auto text-center sm:text-left">
                            <h4 className="text-lg text-white font-medium mb-7">About Us</h4>
                            <p className="text-left text-white">
                                Established in 2009 in the Middle East, Exceed NetSec specializes in advanced IT
                                security and network solutions.
                            </p>
                        </div>
                    </div>

                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-white">
                                © Copyright Exceed Netsec 2024-2025 All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
