import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "/Logop7.svg";

const Footer = () => {
  return (
    <div className="w-full py-10 lg:py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo and Social Icons */}
      <div className="w-full h-full flex flex-col gap-6 items-center lg:items-start">
        <img
          className="rounded-full w-32 sm:w-32 md:w-32 lg:w-32 object-cover shadow-lg"
          src={Logo}
          alt="Logo"
        />
        <div className="flex gap-4">
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

      {/* Quick Link Section */}
      <div className="w-full h-full text-center lg:text-left">
        <h3 className="text-lg sm:text-xl uppercase text-designColor tracking-wide">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          {["About", "Portfolio", "Services", "Blog", "Contact"].map(
            (item, index) => (
              <li key={index} className="relative group">
                {/* Text */}
                <span className="w-full text-base sm:text-lg hover:text-designColor duration-300 cursor-pointer">
                  {item}
                </span>
                {/* Underline */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-designColor transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Resources Section */}
      <div className="w-full h-full text-center lg:text-left">
        <h3 className="text-lg sm:text-xl uppercase text-designColor tracking-wide">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          {[
            "Authentication",
            "System Status",
            "Terms of Service",
            "Pricing",
            "Over Right",
          ].map((item, index) => (
            <li key={index} className="relative group">
              {/* Text */}
              <span className="w-full text-base sm:text-lg hover:text-designColor duration-300 cursor-pointer">
                {item}
              </span>
              {/* Underline */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-designColor transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Developers Section */}
      <div className="w-full h-full text-center lg:text-left">
        <h3 className="text-lg sm:text-xl uppercase text-designColor tracking-wide">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          {["React", "Tailwind", "JavaScript", "MongoDB", "Node.js"].map(
            (item, index) => (
              <li key={index} className="relative group">
                {/* Text */}
                <span className="text-base sm:text-lg hover:text-designColor duration-300 cursor-pointer">
                  {item}
                </span>
                {/* Underline */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-designColor transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
