import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

import intro from "../images/intro.png";
import intro2 from "../images/blob-shape.png";
const Intro = () => {
  return (
    <>
      {/* <section className="pt-10 overflow-hidden    md:pt-0 sm:pt-16 2xl:pt-16 mt-[60px] ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <div>
              <h2 className=" mb-5 text-4xl  text-black  sm:text-[40px]/[48px] border-gray-700 font-extrabold  ">
                 
              Empowering Growth with Innovation and Exceptional IT Solutions
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8 text-justify">
              Transform your business with our cutting-edge IT products and technology solutions. At Exceed NetSec, we deliver unparalleled personalized service, empowering you to concentrate on what matters most—growing your business. Our state-of-the-art automated support platform ensures rapid issue resolution, keeping your systems and team operating seamlessly. Let us take the lead in crafting custom software solutions designed to streamline your processes and elevate your efficiency. Experience innovation and reliability like never before.            </p>
            </div>

            <div className="relative" data-aos="fade-left">


              <img
                className="relative w-full xl:max-w-xl xl:mx-auto rounded-lg xl:ms-6 2xl:origin-bottom 2xl:scale-110"
                src={intro}
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Features */}

      {/* <h1 className="text-center text-4xl font-bold text-black">Our Specialization</h1> */}

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src={intro}
            />
          </div>
          {/* End Col */}
          <div className="mt-1 sm:mt-10 lg:mt-0">
            <div className="space-y-1 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">

                  Empowering Growth with Innovation and Exceptional IT Solutions
                </h2>
                <p className="text-gray-500 dark:text-neutral-500 text-xl text-justify">
                  Transform your business with our cutting-edge IT products and technology solutions. At Exceed NetSec, we deliver unparalleled personalized service, empowering you to concentrate on what matters most—growing your business. Our state-of-the-art automated support platform ensures rapid issue resolution, keeping your systems and team operating seamlessly. Let us take the lead in crafting custom software solutions designed to streamline your processes and elevate your efficiency. Experience innovation and reliability like never before.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              {/* <ul className="space-y-2 sm:space-y-4">
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">Easy &amp; fast</span> designing
                  </span>
                </div>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    Powerful <span className="font-bold">features</span>
                  </span>
                </div>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    User Experience Design
                  </span>
                </div>
              </li>
            </ul> */}


              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}




    </>
  );
};

export default Intro;
