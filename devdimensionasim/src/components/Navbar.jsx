import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Trust from "../assets/trustpiloit.png";
import Button from "./Button/Button";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left section: Logo + Desktop Menu */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={Logo} alt="Logo" className="h-8 w-auto sm:h-10" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-secondary font-medium text-[16px]">
              <li className="hover:text-primary cursor-pointer">How it works</li>
              <li className="hover:text-primary cursor-pointer">PR-CRM</li>
              <li className="hover:text-primary cursor-pointer">Our leads</li>
              <li className="hover:text-primary cursor-pointer">Pricings</li>
            </ul>
          </div>

          {/* Right section: Desktop Trust + Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <img src={Trust} alt="Trust" className="h-8 w-auto sm:h-10" />
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="hollow">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="filled">Signup</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="text-secondary hover:text-primary focus:outline-none text-[16px] font-medium"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {menuOpen && (
        <div className="fixed inset-0  bg-secondary opacity-100 z-100">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6">
            {/* Close button */}
            <button
              className="self-end text-gray-700 text-xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-4 text-secondary font-medium text-[16px]">
              <li className="hover:text-primary cursor-pointer">How it works</li>
              <li className="hover:text-primary cursor-pointer">PR-CRM</li>
              <li className="hover:text-primary cursor-pointer">Our leads</li>
              <li className="hover:text-primary cursor-pointer">Pricings</li>
            </ul>

            {/* Trust Image */}
            <img src={Trust} alt="Trust" className="h-8 w-auto sm:h-10" />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="filled">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button variant="hollow">Signup</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
