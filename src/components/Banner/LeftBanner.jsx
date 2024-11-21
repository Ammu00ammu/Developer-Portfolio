import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
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
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{""} <span className="text-designColor ">Ankit Bhatt</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have expertise in the MERN stack (MongoDB, Express, React, Node.js)
          and am well-versed in modern web development frameworks such as React,
          Tailwind CSS, and Bootstrap.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/ankitammu.bhatt?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>

            <a
              href="https://www.instagram.com/ankit_bhatt00/profilecard/?igsh=eTAyemsxMXFuOGl0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-bhatt-8aa39b214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
