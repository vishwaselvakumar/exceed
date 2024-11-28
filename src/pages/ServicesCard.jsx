import React, { useEffect } from "react";
import img1 from "../images/servicescard/1.jpeg";
import img2 from "../images/servicescard/2.jpg";
import img3 from "../images/servicescard/3.jpeg";
import img4 from "../images/servicescard/4.jpeg";
import img5 from "../images/servicescard/5.jpg";
import img6 from "../images/servicescard/6.jpeg";
import img7 from "../images/servicescard/7.jpeg";
import img8 from "../images/servicescard/8.jpg";
import img9 from "../images/servicescard/9.jpg";
import img10 from "../images/servicescard/10.jpeg";
import img11 from "../images/servicescard/11.jpg";
import img12 from "../images/servicescard/12.jpeg";
import img13 from "../images/servicescard/13.jpeg";
import img14 from "../images/servicescard/14.jpg";
import img15 from "../images/lanwan.jpg";
import img16 from "../images/it & services.jpeg";
import img17 from "../images/backup.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceCards } from "../store/serviceCard/serviceCard";

function ServicesCard() {
  const dispatch = useDispatch();
  const { serviceCards, error } = useSelector(
    (state) => state.serviceCard.allServiceCards
  );

  useEffect(() => {
    dispatch(getAllServiceCards()); 
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch]);


  // const serviceCardData = [
  //   {
  //     id: "66a35ad1e2445cfea42cb80d",
  //     name: "Enhancing Mail Security",
  //     img: img1,
  //     aos: "fade-left",
  //   },
  //   {
  //     id: "66a35c21e2445cfea42cb836",
  //     name: "Multi Layer Firewall",
  //     img: img2,
  //     aos: "zoom-in",
  //   },
  //   {
  //     id: "66a35cd2e2445cfea42cb844",
  //     name: "Mail Archiving Solutions",
  //     img: img3,
  //     text: "We offer robust business continuity solutions, including real-time replication and failover capabilities. Our real-time replication ensures your data is consistently synchronized, minimizing the risk of loss. Our failover systems swiftly transition operations to backup solutions during disruptions, ensuring uninterrupted service. Trust us to keep your business resilient and operational in any situation.",
  //     aos: "fade-up",
  //   },
  //   {
  //     id: "66a35e40e2445cfea42cb85d",
  //     name: "Server High Availability",
  //     img: img4,
  //     text: "We offer robust antivirus and content filtering solutions to protect your digital environment from threats. Our antivirus solutions detect and neutralize malware in real-time, ensuring your systems remain secure. Our content filtering technology blocks access to harmful or inappropriate websites, safeguarding your network and users. Rely on our solutions for comprehensive protection and peace of mind.",
  //     aos: "fade-up",
  //   },
  //   {
  //     id: "66a35efbe2445cfea42cb865",
  //     name: "Microsoft Dynamics 365",
  //     img: img5,
  //     aos: "fade-up",
  //   },

  //   {
  //     id: "66a35fa8e2445cfea42cb877",
  //     name: "DR Solutions Keep System ",
  //     img: img6,
  //     aos: "flip-left",
  //   },
  //   {
  //     id: "66a36063e2445cfea42cb87b",
  //     name: "Information Technology ",
  //     img: img7,
  //     aos: "fade-right",
  //   },
  //   {
  //     id: "66a361b3e2445cfea42cb885",
  //     name: "Backup with Protection",
  //     img: img8,
  //     aos: "flip-left",
  //   },
  //   {
  //     id: "66a3690ce2445cfea42cb893",
  //     name: "LAN WAN & Wireless",
  //     img: img9,
  //     aos: "flip-right",
  //   },
  //   {
  //     id: "66a36a2ce2445cfea42cb899",
  //     name: "Website Development",
  //     img: img10,
  //     text: "We offer IT and security awareness training to equip your team with essential knowledge for safeguarding your digital assets. Our programs cover key topics such as cybersecurity best practices, threat recognition, and data protection. We provide engaging and practical training to ensure your employees are well-prepared to handle security challenges. Trust us to enhance your organization's overall security posture through effective education.",
  //     aos: "flip-right",
  //   },
  //   {
  //     id: "66a36b7be2445cfea42cb8a3",
  //     name: "Remote Application",
  //     img: img11,
  //     aos: "zoom-in",
  //   },
  //   {
  //     id: "66a36cc1e2445cfea42cb8b9",
  //     name: "Mail Server in Premises",
  //     img: img14,
  //     text: "We offer IT security awareness training to empower your team with crucial skills to protect your organization's digital assets. Our training covers essential topics such as phishing prevention, secure practices, and data protection. We use engaging methods to ensure effective learning and application. Trust us to strengthen your team's awareness and enhance your overall security posture.",
  //     aos: "zoom-in",
  //   },

  //   {
  //     id: "66a36dd7e2445cfea42cb8cd",
  //     name: "Ransomware Protections",
  //     img: img13,
  //     aos: "fade-left",
  //   },
  //   {
  //     id: "66a37048e2445cfea42cb8e0",
  //     name: "IT Performance and Tuning",
  //     img: img12,
  //     aos: "zoom-in",
  //   },
  // ];

  return (
    <>
      <div id="services" className="bg-gray-100 py-12">
        <section>
          <div className="my-4 py-4">
            <h2 className="text-center mb-5 text-5xl  text-black  sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8">
              Our Specialization
            </h2>
          </div>

          <div className="px-12">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 shadow-green-300">
              {/* {serviceCardData.map((item, index) => (
                <div
                  className="bg-white  cursor-pointer transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
                  data-aos={item.aos}>
                  <div className="m-2 text-justify text-sm" key={index}>
                    <img
                      alt="card img"
                      className=" object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={item.img}
                    />
                    <h2 className="font-semibold my-4 text-[16px] text-center w-full ">
                      {item.name}
                    </h2>
                  </div>
                  <Link to={`/servicePage/${item.id}`}>
                    <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                        View More
                      </span>
                    </button>
                  </Link>
                </div>
              ))} */}
              {
                serviceCards.map((item)=>(
                  <div
                  className="bg-white  cursor-pointer transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
                  data-aos={item.aos} key={item._id}>
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-56 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={item.imageurl}
                    />
                    <h2 className="font-semibold my-4 text-[16px] text-center w-full h-20 ">
                      {item.heading}
                    </h2>
                  </div>
                  <Link to={`/servicePage/${item._id}`}>
                    <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#38b000] to-[#38b000] hover:bg-[#38b000]  hover:text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                        View More
                      </span>
                    </button>
                  </Link>
                </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesCard;
