import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiMongodb, SiNodedotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-10 p-5 sm:p-10">
        <div className="flex flex-col gap-5">
          <h4 className="font-normal text-base sm:text-lg">WELCOME TO MY WORLD</h4>
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, I'm{""} <span className="text-designColor ">Ankit Bhatt</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-gray-300">
            I have expertise in the MERN stack (MongoDB, Express, React,
            Node.js) and am well-versed in modern web development frameworks
            such as React, Tailwind CSS, and Bootstrap.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div>
            <h2 className="text-sm sm:text-base uppercase font-titleFont mb-4">Find me</h2>
            <div className="flex gap-4 ">
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <FaTwitter />
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-sm sm:text-base uppercase font-titleFont mb-4 text-gray-400">BEST SKILL ON</h2>
            <div className="flex gap-4 flex-wrap ">
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <FaReact/>
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <SiTailwindcss/>
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <SiFigma/>
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <SiMongodb/>
              </span>
              <span className="bannerIcon text-lg sm:text-2xl text-gray-300 hover:text-designColor cursor-pointer">
                <SiNodedotjs/>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeftBanner