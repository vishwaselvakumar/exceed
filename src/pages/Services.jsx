import React from "react";
import { Link } from "react-router-dom";
import one from "../images/pics/one1.png";
import two from "../images/pics/two.png";
import ms from "../images/pics/mic.png";
import ba from "../images/pics/ba.png";
import mail from "../images/pics/mail.png"
import backup from "../images/servicescard/WhatsApp Image 2024-11-18 at 07.20.45_441ccaf9.jpg"

const Services = () => {
  return (
    <div id="services" className="bg-white py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="text-center mb-5 text-5xl text-black sm:text-4xl md:text-5xl font-extrabold underline decoration-[#79df13] underline-offset-8">
            Our Specialization
          </h2>

          <h2 className="mt-4 mx-2 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div
          className="px-4 sm:px-12"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                imgSrc: one,
                title: "Mail Security",
                description:
                  "Our services ensure secure, efficient, and reliable email communication for your organization. We provide seamless setup, migration, and ongoing support tailored to your needs. Trust us to enhance your email infrastructure with robust and scalable solutions.",
              },
              {
                imgSrc: two,
                title: "Multi Layer Firewall",
                description:
                  "Our dual-layer firewall architecture significantly enhances security by integrating two layers of protection. It meticulously analyzes both incoming and outgoing network traffic, providing robust defense against potential threats and ensuring a secure network environment.",
              },
              {
                imgSrc: mail,
                title: "e-Mail Archiving",
                description:
                  "Our secure email archiving solution lets you effortlessly manage, retain, and retrieve emails, seamlessly integrating with your existing setup—no modifications needed. Simplify email management and safeguard your critical data today!",
              },
              {
                imgSrc: backup,
                title: "Disaster Recovery/Backup",
                description:
                  "Our DR and Backup Solutions ensure swift data recovery, protect sensitive information, and prevent disruptions during failures, cyberattacks, or system upgrades. ensuring operational stability without compromising data integrity. Trust our solutions to deliver resilience, reliability, and peace of mind for your business.",
              },
            ].map(({ imgSrc, title, description }, index) => (
              <div
                key={index}
                className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto flex flex-col"
              >
                <div className="min-h-[256px]">
                  <img
                    alt={title}
                    className="w-full object-cover h-60"
                    src={imgSrc}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-gray-800 text-xl font-bold text-center">
                    {title}
                  </h3>
                  <p className="mt-4 text-md text-black leading-relaxed text-justify flex-grow">
                    {description}
                  </p>
                  <Link to="/services">
                  <button className="mt-5 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                        View More
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
