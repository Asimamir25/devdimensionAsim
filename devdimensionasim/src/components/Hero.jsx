import React, { useState } from 'react';
import HeroLady from '../assets/hero_lady.png'
const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobile: '',
    agencyEmployees: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-primary min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {/* Left Section - Content (2/3 width on large screens) */}
          <div className="lg:col-span-2 ">
            {/* Brand Name */}
            <div className="text-secondary text-sm font-bold tracking-wide">
              PROSPECTROUTE
            </div>

            {/* Main Headline */}
            <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              High volume, pristine, exclusive leads.
            </h1>

            {/* Sub-headline */}
            <p className="text-secondary text-lg sm:text-xl opacity-90">
              Up to 50 web leads per day, exclusive and high quality.
            </p>

            {/* Illustration - Simple line art of person at desk */}
            <div className="mt-8 max-w-md">
            <img src={HeroLady} alt="" />
            </div>
          </div>

          {/* Right Section - Form (1/3 width on large screens) */}
          <div className="lg:col-span-1 bg-[#ffffff70] shadow-[0px_4px_11px_0px_#657A8B1A] p-5 rounded-md">
            <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4">
              <h2 className="text-secondary text-xl sm:text-2xl font-semibold mb-6">
                Want to see pricing? We'll email it!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Ali"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="devdimension@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile (used as password)
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="+923136754445"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                {/* Agency Employees Dropdown */}
                <div>
                  <label htmlFor="agencyEmployees" className="block text-sm font-medium text-gray-700 mb-1">
                    Agency employees
                  </label>
                  <select
                    id="agencyEmployees"
                    name="agencyEmployees"
                    value={formData.agencyEmployees}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')] bg-no-repeat bg-right bg-[length:20px] pr-10"
                  >
                    <option value="">Select...</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="21-50">21-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-opacity mt-6"
                >
                  Send pricing!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

