import React from "react";
import { FaPhone } from "react-icons/fa6";

const Infobar = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:flex-row items-center sm:justify-end gap-2 sm:gap-3 py-3">
          {/* Icon */}
          <span className="flex-shrink-0">
            <FaPhone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </span>

          {/* Text */}
          <span className="text-white font-normal text-sm sm:text-base mt-1 sm:mt-0">
            Get in touch with us: (888) 775-8857
          </span>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
