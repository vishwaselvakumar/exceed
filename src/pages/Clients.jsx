import React from "react";
import brand1 from "../images/clients/p1.png";
import brand2 from "../images/clients/p2.png";
import brand3 from "../images/clients/p3.png";
import brand4 from "../images/clients/p4.png";
import brand5 from "../images/clients/p5.png";
import brand6 from "../images/clients/p6.png";
import brand7 from "../images/clients/p7.png";
import brand8 from "../images/clients/p8.png";
import brand9 from "../images/clients/p9.png";
import brand10 from "../images/clients/p10.png";
import brand11 from "../images/clients/p11.png";
import brand12 from "../images/clients/p12.png";
import brand13 from "../images/clients/p13.png";
import brand14 from "../images/clients/p14.png";

const brandData = [
  { id: 1, img: brand1, text: "brand" },
  { id: 2, img: brand2, text: "brand" },
  { id: 3, img: brand3, text: "brand" },
  { id: 4, img: brand4, text: "brand" },
  { id: 5, img: brand5, text: "brand" },
  { id: 6, img: brand6, text: "brand" },
  { id: 7, img: brand7, text: "brand" },
  { id: 8, img: brand8, text: "brand" },
  { id: 9, img: brand9, text: "brand" },
  { id: 10, img: brand10, text: "brand" },
  { id: 11, img: brand11, text: "brand" },
  { id: 12, img: brand12, text: "brand" },
  { id: 13, img: brand13, text: "brand" },
  { id: 14, img: brand14, text: "brand" },
];

const Clients = () => {
  return (
    <div className="mt-[-16px]" id="partners">
      <section>
        <div>
          <h2 className="text-center mb-5 text-5xl text-black sm:text-4xl md:text-5xl font-extrabold underline decoration-[#79df13] underline-offset-8">
            Our Partners
          </h2>
        </div>

        <div className="p-4 mb-5 sm:p-10 mb-5">
          <div className="w-full overflow-hidden">
            <div className="flex space-x-6 sm:space-x-16 animate-infinite-scroll whitespace-nowrap">
              {brandData.map((item, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={item.img}
                  className="h-8 sm:h-12 md:h-16 lg:h-12"
                  alt={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
