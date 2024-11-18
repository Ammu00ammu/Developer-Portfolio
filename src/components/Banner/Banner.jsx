import React from "react";
import LeftBanner from "./LeftBanner";
import logo from "../../assets/Logop2.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[px] pb-10 pt-10 flex flex-col lg:flex-row items-center border-b-[1px] border-b-black font-titleFont"
    >
      <LeftBanner />
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
        <img
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[550px] lg:h-[550px] object-cover z-10"
          src={logo}
          alt=""
        />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[230px] h-[230px] sm:w-[330px] sm:h-[330px] lg:w-[550px] lg:h-[550px] bg-gradient-to-t from-[#1e2024] to-[#202327] shadow-shadowOne  flex justify-center items-center"></div>
      </div>
    </section>
  );
};
export default Banner;
