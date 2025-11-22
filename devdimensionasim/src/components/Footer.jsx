import React from "react";
import Logo from "../assets/logoFooter.png";
import Trust from "../assets/trustpiloit.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Left Section - Logo and Contact */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <img
                src={Logo}
                alt="ProspectRoute Logo"
                className="h-10 w-auto mb-2"
              />
              <div className="text-secondary text-lg font-bold">
                PROSPECTROUTE
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-secondary text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Get in touch: (888) 775-8857</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <div>Iqbal Town,Lahore</div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Navigation Links */}
          <div className="flex justify-between gap-10">
            <div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="hover:opacity-80 cursor-pointer">
                  How it works
                </li>
                <li className="hover:opacity-80 cursor-pointer">PR-CRM</li>
                <li className="hover:opacity-80 cursor-pointer">Our leads</li>
              </ul>
            </div>

            {/* Third Section - More Links */}
            <div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="hover:opacity-80 cursor-pointer">Pricing</li>
                <li className="hover:opacity-80 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:opacity-80 cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Trustpilot */}
          <div>
            <div className="mb-4">
              <img src={Trust} alt="Trustpilot" className="h-8 w-auto" />
            </div>
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="#00B67A"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary border-opacity-20 pt-6 mt-8">
          <div className="text-secondary text-sm text-center">
            © AsimDev 2025 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
