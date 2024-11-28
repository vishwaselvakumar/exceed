import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServiceCards } from '../store/serviceCard/serviceCard';
import { BASE_URL } from '../store/constant';
import axios from 'axios';
import ServiceCardEditForm from './ServiceCarsEditForm';
import { Link } from 'react-router-dom';

function AllservicesCard() {
  const dispatch = useDispatch();
  const { serviceCards, error,loading } = useSelector(
    (state) => state.serviceCard.allServiceCards
  );

  useEffect(() => {
    dispatch(getAllServiceCards());
  }, [dispatch]);

  if (loading === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {serviceCards && serviceCards.map((item) => (
           <div
           className="bg-white  cursor-pointer transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
           data-aos={item.aos} key={item._id}>
           <div className="m-2 text-justify text-sm">
             <img
               alt="card img"
               className=" object-cover w-full h-36 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
               src={item.imageurl}
             />
             <h2 className="font-semibold my-4 text-[16px] text-center w-full ">
               {item.heading}
             </h2>
             <p className="my-4 text-[16px] text-center w-full ">
               {item.description.paragraph?.substring(0,25)}...
             </p>
           </div>
             <Link to={`/Admindashboard/editFrom/${item._id}`}>
               <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#67f529] to-[#67f529] hover:bg-[#67f529]  hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                 <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                   edit
                 </span>
               </button>
             </Link>
         </div>
        ))}
      </div>
    </div>
  );
}

export default AllservicesCard;
