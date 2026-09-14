import React, { useState } from "react";
import logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-black shadow-md relative">
      <div className="container mx-auto navbar flex justify-between items-center px-6 py-3">
        <div className="flex-none">
          <a className="btn btn-ghost p-0 hover:bg-transparent">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 font-medium text-base-content/80">
            <li>
              <a href="#" className="text-[#DB2777] font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex flex-none items-center gap-3">
          <button className="btn btn-ghost rounded-full border border-base-300 px-6">
            Sign In
          </button>
          <button className="btn rounded-full px-6 text-white bg-[#DB2777] border-[#DB2777] hover:bg-[#be185d]">
            Sign Up
          </button>
        </div>

        {/* MOBILE/TABLET BUTTON: Hamburger Icon (Visible under 768px) */}
        <div className="lg:hidden flex-none">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle text-2xl text-base-content"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 border-t shadow-lg z-50 lg:hidden p-6 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium text-base-content/80 mb-6">
            <li>
              <a
                href="#"
                className="text-[#DB2777]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#DB2777]"
                onClick={() => setIsOpen(false)}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#DB2777]"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#DB2777]"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#DB2777]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <button
              className="btn btn-ghost rounded-full border border-base-300 w-full"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </button>
            <button
              className="btn rounded-full w-full text-white bg-[#DB2777] border-[#DB2777]"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
