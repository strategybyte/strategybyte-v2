"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-2.5 transition-all duration-500 bg-white/5 backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 items-center">
            {/* Logo */}
            <div className="col-span-3 lg:col-span-3">
              <div className="relative max-w-[70px]">
                <Link href="/" className="block">
                  <img
                    src="/assets/images/strategy-byte-logo-color.svg"
                    alt="Onovo"
                    className={`max-w-full h-auto transition-opacity duration-300`}
                  />
                  <img
                    src="/assets/images/strategy-byte-logo-color.svg"
                    alt="Onovo"
                    className={`max-w-full h-auto absolute top-0 left-0 transition-opacity duration-300`}
                  />
                </Link>
              </div>
            </div>

            {/* Menu Button */}
            <div className="col-span-6 flex justify-center">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex items-center justify-center group"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 relative bg-white ${
                    isMenuOpen ? "rotate-45" : ""
                  }`}
                >
                  <span
                    className={`block absolute w-6 h-0.5 transition-all duration-300 bg-white ${
                      isMenuOpen ? "opacity-0" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`block absolute w-6 h-0.5 transition-all duration-300 bg-white ${
                      isMenuOpen ? "-rotate-90" : "translate-y-1.5"
                    }`}
                  ></span>
                </span>
              </button>
            </div>

            {/* Showcase Button */}
            <div className="col-span-3 lg:col-span-3 flex justify-end">
              <button
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
                className={`relative inline-flex items-center h-10 px-4 group overflow-hidden transition-colors duration-300`}
              >
                <span className="relative z-10">
                  <span className="inline-block relative">
                    Explore
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </span>
                </span>
                <span className="ml-2 flex items-center justify-center w-4 h-4 relative">
                  <span
                    className={`block w-3 h-0.5 transition-all duration-300`}
                  ></span>
                  <span
                    className={`absolute top-1/2 right-0 w-0 h-0 border-l-[3px] border-t-[3px] border-b-[3px] border-transparent transition-all duration-300`}
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlays */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-700 delay-100 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Menu Container */}
        <div
          className={`relative h-full flex items-center justify-center transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4">
            <nav className="text-center">
              <ul className="space-y-8">
                <li className="group">
                  <div className="relative">
                    <Link
                      href="/"
                      className="text-white text-4xl md:text-6xl font-medium hover:text-gray-300 transition-colors duration-300 inline-block relative"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block animate-fade-in-up delay-100">
                        Home
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* <ChevronDownIcon className="w-6 h-6 text-white ml-2 inline-block" /> */}
                  </div>
                </li>
                <li className="group">
                  <div className="relative">
                    <Link
                      href="/about"
                      className="text-white text-4xl md:text-6xl font-medium hover:text-gray-300 transition-colors duration-300 inline-block relative"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block animate-fade-in-up delay-200">
                        About
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* <ChevronDownIcon className="w-6 h-6 text-white ml-2 inline-block" /> */}
                  </div>
                </li>
                <li className="group">
                  <div className="relative">
                    <Link
                      href="/our-services"
                      className="text-white text-4xl md:text-6xl font-medium hover:text-gray-300 transition-colors duration-300 inline-block relative"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block animate-fade-in-up delay-300">
                        Services
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* <ChevronDownIcon className="w-6 h-6 text-white ml-2 inline-block" /> */}
                  </div>
                </li>
                <li className="group">
                  <div className="relative">
                    <Link
                      href="/news"
                      className="text-white text-4xl md:text-6xl font-medium hover:text-gray-300 transition-colors duration-300 inline-block relative"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block animate-fade-in-up delay-400">
                        News
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* <ChevronDownIcon className="w-6 h-6 text-white ml-2 inline-block" /> */}
                  </div>
                </li>
                <li className="group">
                  <Link
                    href="/contact"
                    className="text-white text-4xl md:text-6xl font-medium hover:text-gray-300 transition-colors duration-300 inline-block relative"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block animate-fade-in-up delay-500">
                      Contact
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
