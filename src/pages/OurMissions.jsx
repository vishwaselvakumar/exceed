import React from 'react'
import visions from '../images/ourvisions.jpg'
import mission1 from '../images/missions1.jpg'
import mission2 from '../images/mission2.jpg'
import mission3 from '../images/mission3.jpeg'
function OurMissions() {
   return (
      <>
         <section
            className="relative mt-[30px] bg-cover h-full w-full sm:bg-contain  "
            style={{
               backgroundImage: `url(${visions})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover', // Ensures the image scales to fill the screen
            }}
         >
            <div
               className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
               className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 "
            >
               <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right sm:backdrop-blur-lg p-4 backdrop-blur-sm"
                  data-aos="fade-right"
               >
                  <h2
                     className=" text-white text-center mb-5 text-5xl  text-dark  sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8"
                  >
                     OUR AIM
                  </h2>

                  <p className="mt-4 max-w-lg text-white text-justify">
                  Exceed NetSec, established in 2009 in Dubai, UAE, enhances IT security and network performance through specialized services such as email security, network optimization, disaster recovery planning, fully managed services, and IT security awareness training. With extensive industry expertise, we ensure secure and seamless operations by safeguarding your organization against evolving cyber threats. Our focus is on maintaining the confidentiality, availability, and integrity of your data assets while providing tailored, efficient, and easy-to-manage solutions designed to meet your specific needs.</p>
                  <div className="mt-8 flex flex-wrap gap-4 text-center">
                  </div>
               </div>
            </div>
         </section>
         {/* OUR Missions */}
         <section
            className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark mx-6"
            data-aos="zoom-in"
         >
            <div className="container mx-auto">
               <div className="flex flex-wrap items-center justify-between -mx-4">
                  <div className="w-full px-4 lg:w-6/12">
                     <div className="flex items-center -mx-3 sm:-mx-4">
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                           <div className="py-3 sm:py-4">
                              <img
                                 src={mission1}
                                 alt=""
                                 className="w-full rounded-2xl"
                              />
                           </div>
                           <div className="py-3 sm:py-4">
                              <img
                                 src={mission2}
                                 alt=""
                                 className="w-full rounded-2xl"
                              />
                           </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                           <div className="relative z-10 my-4">
                              <img
                                 src={mission3}
                                 alt=""
                                 className="w-full rounded-2xl "
                              />
                              <span className="absolute -right-7 -bottom-7 z-[-1]">
                                 <svg
                                    width="134"
                                    height="106"
                                    viewBox="0 0 134 106"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <circle
                                       cx="1.66667"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 31 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3334"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 60.3334 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 103 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="104"
                                       r="1.66667"
                                       transform="rotate(-90 132 104)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="89.3333"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 89.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="89.3333"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 89.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="89.3333"
                                       r="1.66667"
                                       transform="rotate(-90 31 89.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="89.3333"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 89.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 103 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="89.3338"
                                       r="1.66667"
                                       transform="rotate(-90 132 89.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="74.6673"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 74.6673)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="31.0003"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 31.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="31.0003"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 31.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 31 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="31.0003"
                                       r="1.66667"
                                       transform="rotate(-90 31 31.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="31.0003"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 31.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 103 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 103 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="74.6668"
                                       r="1.66667"
                                       transform="rotate(-90 132 74.6668)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="30.9998"
                                       r="1.66667"
                                       transform="rotate(-90 132 30.9998)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 31 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 31 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 103 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 103 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="60.0003"
                                       r="1.66667"
                                       transform="rotate(-90 132 60.0003)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="16.3333"
                                       r="1.66667"
                                       transform="rotate(-90 132 16.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="45.3333"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 45.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="1.66667"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 1.66667 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="45.3333"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 45.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="16.3333"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 16.3333 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="45.3333"
                                       r="1.66667"
                                       transform="rotate(-90 31 45.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="31"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 31 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="45.3333"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 45.3333)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="45.6667"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 45.6667 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="60.3333"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 60.3333 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="88.6667"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 88.6667 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="117.667"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 117.667 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="74.6667"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 74.6667 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 103 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="103"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 103 1.66683)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="45.3338"
                                       r="1.66667"
                                       transform="rotate(-90 132 45.3338)"
                                       fill="#3056D3"
                                    />
                                    <circle
                                       cx="132"
                                       cy="1.66683"
                                       r="1.66667"
                                       transform="rotate(-90 132 1.66683)"
                                       fill="#3056D3"
                                    />
                                 </svg>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2 xl:w-5/12" >
                     <div className="mt-10 lg:mt-0" >
                        {/* <span className="block mb-4 text-lg font-semibold text-primary">
               Why Choose Us
               </span> */}

                        <h2
                           className="text-center mb-5 text-5xl  text-black  sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8"
                        >
                           OUR VISION
                        </h2>
                        <p className="mb-5 text-xl text-body-color  leading-relaxed text-black text-justify px-4">
                        Exceed NetSec stands at the forefront of IT network security and infrastructure, committed to protecting your organization's data assets. Our vision is to ensure the confidentiality, availability, and integrity of your data while minimizing risks. We guarantee solutions that are not only straightforward to manage but also highly efficient, using the latest technology to tailor them to your unique needs, regardless of the service level you choose.</p>

                        <a
                           href="javascript:void(0)"
                           className="inline-flex items-center  justify-center py-3 text-base font-medium text-center text-black border border-[#79df13] rounded-md px-7 bg-primary hover:bg-opacity-50"
                        >
                           Get Started
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default OurMissions