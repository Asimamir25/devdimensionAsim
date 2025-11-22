import React, { useState } from 'react';
import Home from '../assets/homework.png'
const HowItWorks = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 lg:gap-6 mb-4 lg:mb-6 items-start">
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-1">
            <div className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
              HOW IT WORKS
            </div>

            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
              Hand-curated Auto/Home Leads - Delivered to you digitally, exclusively.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-normal">
              <p>
                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
              </p>

              <p>
                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end order-2 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <img 
                src={Home} 
                alt="How it works illustration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 lg:mb-6">
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-normal">
            

              <p>
                If you use our optional CRM, called the PR-CRM, to manage your leads the CRM instantly places a call to that lead and connects your producer with the opportunity. If no producer is available the CRM will connect the call immediately when the next producer is available.
              </p>

              <p>
                PR's position is that generating the lead is only half the battle. If you choose, you can receive the PR-CRM free with ProspectRoute when you're enrolled to receive leads. PR-CRM's technology is built on the Unifyy platform and helps automate sales from many lead vendors, not just ProspectRoute.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-normal">
              <p>
                The PR-CRM prioritizes calls in many ways but what really makes it amazing when it's used with ProspectRoute. This is because when PR generates a lead, the PR-CRM immediately connects your producer with the prospect by phone when it comes in. This means it's the fastest way to get prospects on the phone. For each minute that passes from when a prospect expresses interest and a producer makes their first contact attempt, the likelihood of a sale decreases by 50%. Using PR with the PR-CRM.
              </p>

              <p>
                You can connect any lead vendor with the PR-CRM so you can use it even when you're not actively using ProspectRoute for your marketing. But between the volume of high quality leads we can produce and our award-winning PR-CRM, we don't think you'll want to use any other vendors.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
          <button
            onClick={toggleExpand}
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-md bg-white text-secondary text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
          >
            {isExpanded ? (
              <>
                Click to read less
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Click to read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>

          <button className="bg-primary text-secondary px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity">
            Get pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

