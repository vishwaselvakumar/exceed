import React, { useEffect } from "react";
import itservice from "../images/it & services.jpeg";
import cater from "../images/cater.png";
import integration from "../images/integration.jpg";
import Missions from "./OurMissions";

function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Missions />
      <div className="relative overflow-hidden  pt-16 pb-32 space-y-24 bg-white">
        <div className="relative " data-aos="fade-up">
          <h2 className="text-center mb-5 text-5xl  text-black  sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8">
            OUR EXPERTISE
          </h2>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-white ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0  ">

              <div>
                <div className="mt-6  bg-white/30">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    Exceed NetSec caters
                  </h2>
                  <p className="mt-4 text-lg  text-justify text-black">
                    We cater to your business needs with unparalleled IT professional services, allowing you to focus on growth. Our highly efficient, automated support infrastructure accelerates issue resolution, ensuring your systems and team run smoothly.
                  </p>
                  {/* <div className="mt-6">


                <div >
                

                    <div className="mt-6  bg-white/30">
                        <h2 className="text-3xl font-bold tracking-tight text-dark">
                        Exceed NetSec cater 
                        </h2>
                        <p className="mt-4 text-lg ">
                        Exceed NetSec caters to all information technology needs, project management, and consulting for various industries and businesses in healthcare, construction, manufacturing, hospitality, banking, automobiles, etc. By using our consulting and optimization services for your information technology requirements, you free up internal resources, lower your operating costs, and raise your operating efficiency.
                        </p>
                        {/* <div className="mt-6">

                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl  shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={cater}
                />
              </div>
            </div>
          </div>
        </div>


        <div className="relative" data-aos="fade-up">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-white">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">

              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    Exceed NetSec IT Professional Services
                  </h2>
                  <p className="mt-4 text-lg text-black text-justify">
                    Our professional services offer an unprecedented, personalized approach, freeing your resources to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that speeds up issue resolution and keeps your systems moving.
                  </p>
                  {/* <div className="mt-6">

                <div>
                   
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-dark">
                        Exceed NetSec IT professional Services
                        </h2>
                        <p className="mt-4 text-lg text-dark">
                        Exceed NetSec IT professional services offer you an unprecedented, personal level of service while freeing your resources to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that speeds issue resolution and keeps your systems and your people moving.
                        </p>
                        {/* <div className="mt-6">

                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={itservice}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative " data-aos="fade-up">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-2 lg:grid-cols-2 lg:gap-24 lg:px-8 bg-white ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0  ">

              <div>
                <div className="mt-6  bg-white/30">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    WE SPECIALIZE IN
                  </h2>
                  <ul className="mt-4 pl-3 text-lg  text-justify text-black list-disc">
                    <li>Enhance Email Security Spoofing-Spam Filtering</li>
                    <li>Mail Archiving Solutions online & on-premises</li>
                    <li>Multi-Layer Firewall, Remote Connectivity and VPN Solutions</li>
                    <li>Enterprise Remote Appl Server with Ransomware Protection</li>
                    <li>Server High Availability - DR Backup Solutions</li>
                    <li>Ransomware-Malware Protection & Prevention Solutions</li>
                    <li>Wireless Indoor / Outdoor Solutions </li>
                    <li>Microsoft Dynamics 365 Implementation Consultancy </li>
                    <li>IT Network Performance Tunning</li>
                    <li>IT Security Awareness Training</li>
                    <li>IT Network Security, Network Documentation & Base lining</li>
                    <li>IT Implementation, Integration & Managed Service</li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl  shadow-2xl ring-1 -translate-x-7 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-[70%] lg:w-[80%] lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={integration}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>



      <div className="font-sans bg-white px-4 py-5 mb-10" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-8 lg:max-w-6xl max-w-2xl mx-auto" >
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6 -ml-2">WE SPECIALIZE IN</h2>
            <ul className="list-none">
              {/* List item styling */}
              <li className="text-xl text-black flex items-start ml-4 ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Enhance Email Security Spoofing-Spam Filtering
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Mail Archiving Solutions online & on-premises
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Multi-Layer Firewall
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Remote Connectivity and VPN Solutions
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Enterprise Remote Application Server with Ransomware Protection
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Server High Availability - DR Backup Solutions
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Ransomware-Malware Protection & Prevention Solutions
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Microsoft Dynamics 365 Implementation Consultancy
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                IT Network Performance Tuning
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                IT Security Awareness Training
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                IT Network Security, 
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                Network Documentation & Base lining
              </li>
              <li className="text-xl text-black flex items-start ml-4">
                <span className="mr-4 text-2xl" style={{ position: 'relative', left: '0' }}>➣</span>
                IT Implementation, Integration & Managed Service
              </li>
            </ul>
          </div>

          <div>
            <img
              src={integration}
              alt="Placeholder Image"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
