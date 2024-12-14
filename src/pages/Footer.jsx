import React, { useEffect, useState } from "react";
import Logo from "../images/EXCEED LOGO.png";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io"; // Add the forward arrow icon
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sections = ["/", "/about", "/services", "/help"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Update the current index based on the current path
        const currentPath = location.pathname;
        const index = sections.findIndex((path) => path === currentPath);
        setCurrentIndex(index !== -1 ? index : 0);
    }, [location.pathname]);

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        navigate(sections[prevIndex]);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % sections.length;
        navigate(sections[nextIndex]);
    };

    return (
        <>
            <section className="py-3 bg-green-500 font-bold text-black text-right px-10 relative">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className={`absolute top-1/2 transform -translate-y-1/2 left-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black ${currentIndex === 0 ? "hidden" : ""}`}
                >
                    <IoMdArrowBack />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={`absolute top-1/2 transform -translate-y-1/2 right-4 bg-green-200 text-black px-6 py-2 rounded-lg hover:bg-green-600 border border-black  ${currentIndex === sections.length - 1 ? "hidden" : ""}`}
                >
                    <IoMdArrowForward />
                </button>

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


            <footer class="w-full bg-gray-700">
                <div class="mx-auto max-w-8xl px-6 lg:px-6">

                    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full ">
                        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <div className="bg-white rounded-md w-[285px] mb-10">
                                <img src={Logo} />
                            </div>
                            <div className="flex mt-4 space-x-8 justify-center lg:justify-start sm:mt-0">
                                {/* Twitter Icon */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaTwitter className="text-white text-4xl" />
                                </a>

                                {/* Instagram Icon */}
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaInstagram className="text-white text-4xl" />
                                </a>

                                {/* LinkedIn Icon */}
                                <a
                                    href="https://www.linkedin.com/company/exceed-netsec-computer-llc/"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <GrLinkedin className="text-white text-4xl" />
                                </a>

                                {/* YouTube Icon */}
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full flex justify-center items-center"
                                >
                                    <FaYoutube className="text-white text-4xl" />
                                </a>
                            </div>


                        </div>

                        <div class="lg:mx-auto text-center sm:text-left">
                            <h4 class="text-lg text-white font-medium mb-7">Pages</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="/" class="text-white">Home</a></li>
                                <li class="mb-6"><a href="/About" class=" text-white">About Us</a></li>
                                <li class="mb-6"><a href="/help" class=" text-white">Help Desk</a></li>
                                <li><a href="/help" class=" text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-center sm:text-left">
                            <h4 class="text-lg text-white font-medium mb-7">Contact</h4>
                            <ul class="text-sm transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-white">Tel: + 971 55 305 3964</a></li>
                                <li class="mb-6"><a href="mailto:enquiries@exceedme.com" class="text-white">enquiries@exceedme.com</a></li>
                                <li class="mb-6"><a href="mailto:helpdesk@exceedme.com" class="text-white">helpdesk@exceedme.com</a></li>
                                <li class="mb-6 text-white">Office #212, Arzoo Building,<br /> AI Quasis 2, Dubai, UAE.</li>
                            </ul>
                        </div>


                        <div class="lg:mx-auto text-center sm:text-left">
                            <h4 class="text-lg text-white font-medium mb-7">Key Solutions</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-white">Mail Security</a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-white">Multi Layer Firewall
                                </a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-white">e-Mail Archiving</a></li>
                                <li><a href="javascript:;" class=" text-white">DR/Backup</a></li>
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-center sm:text-left">
                            <h4 class="text-lg text-white font-medium mb-7">About Us</h4>
                            <p className="text-left text-white" >
                                Established 2009 in the Middle East, Exceed NetSec specializes in advanced IT security and network solutions.
                            </p>
                            {/* <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;"  class="text-white hover:text-gray-900">News</a></li>
                        <li class="mb-6"><a href="javascript:;"  class=" text-white hover:text-gray-900">Tips & Tricks</a></li>
                        <li class="mb-6"><a href="javascript:;"  class=" text-white hover:text-gray-900">New Updates</a></li>
                        <li><a href="javascript:;"  class=" text-white hover:text-gray-900">Events</a></li>
                    </ul> */}
                        </div>
                    </div>

                    <div class="py-7 border-t border-gray-200">
                        <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span class="text-sm text-white "> © Copyright Exceed Netsec 2024-2025 All rights reserved.</span>
                            <ul class="flex items-center gap-9 mt-4 lg:mt-0">

                                <li><a href="javascript:;" class="text-sm text-gray-500"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
