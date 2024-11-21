import React from "react";
import LeftBanner from "./LeftBanner";
import logo from "../../assets/Logop6.svg";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[px] pb-10 pt-10 flex flex-col lg:flex-row items-center border-b-[1px] border-b-black font-titleFont"
    >
      <LeftBanner />
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
        <img
          className=" mb-10 w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] object-cover ml-3 lg:ml-9 lg:mr-12 z-10"
          src={logo}
          alt=""
        />

        <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
};
export default Banner;