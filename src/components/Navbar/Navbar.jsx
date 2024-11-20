import React, { useState } from 'react';
import logo from '../../assets/Logop7.svg';
import { navLinksData } from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50  bg-bodyColor h-28 lg:h-34 mx-auto flex justify-between items-center px-5 lg:px-10 border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <div>
        <img
          className=" w-24 sm:w-32 md:w-32 lg:w-32 "
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ul className="flex items-center gap-5">
          {navLinksData.map(({ id, title, link }) => (
            <li
              className="text-sm sm:text-base hover:text-designColor duration-300 font-normal text-gray-300 lg:tracking-wide cursor-pointer"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-300 text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-bodyColor p-5 flex flex-col items-center gap-4 border-t-[1px] border-t-gray-600 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinksData.map(({ id, title, link }) => (
              <li
                className="text-sm sm:text-base hover:text-designColor duration-300 font-normal text-gray-300 lg:tracking-wide cursor-pointer"
                key={id}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
