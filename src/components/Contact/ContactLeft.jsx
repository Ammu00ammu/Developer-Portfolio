import React from "react";
import contactImg from "../../assets/contact2.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-72 lg:w-[40%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg  mb-2"
        src={contactImg}
        alt=""
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white ">Ankit Bhatt</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos
          eveniet obcaecati eum illo ducimus doloremque architecto molestias cum
          ullam.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9993682118</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{""}
          <span className="text-lightText">ammubhatt000@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>

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
    </div>
  );
};

export default ContactLeft;
