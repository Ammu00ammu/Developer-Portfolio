import React from "react";
import { HiArrowRight } from "react-icons/hi";


const Cards = ({ title, des, icon }) => {
  return (
    <div className="lg:w-full sm:w-[300px] h-80 px-10 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className=" h-72 overflow-y-hidden ">
        <div className="flex h-full flex-col gap-3   sm:translate-y-16 lg:translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
        <div>
          <span className="text-5xl text-designColor">{icon}</span>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="lg:text-2xl sm:text-xl font-titleFont font-bold text-gray-300 ">
            {title}
          </h2>
          <p className="base  ">{des}</p>
          <span className="text-2xl text-designColor"><HiArrowRight/></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
