import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      callsNumber: '45-55',
      callsText: 'Calls/Week',
      price: '$915',
      features: [
        { label: 'Talamarketers', value: '2' },
        { label: 'Hours/Day', value: '8' },
        { label: 'Days/Week', value: '5' },
        { label: 'Includes homeowners', value: 'Yes!' },
        { label: '100% exclusive', value: 'Yes!' },
        { label: 'Post to Velocify', value: 'Yes!' },
        { label: 'Dedicated reps', value: 'Yes!' },
      ],
      highlighted: false,
    },
    {
      id: 2,
      callsNumber: '75-85',
      callsText: 'Calls/Week',
      price: '$1,169',
      features: [
        { label: 'Talamarketers', value: '3' },
        { label: 'Hours/Day', value: '8' },
        { label: 'Days/Week', value: '5' },
        { label: 'Includes homeowners', value: 'Yes!' },
        { label: '100% exclusive', value: 'Yes!' },
        { label: 'Post to Velocify', value: 'Yes!' },
        { label: 'Dedicated reps', value: 'Yes!' },
      ],
      highlighted: true,
    },
    {
      id: 3,
      callsNumber: '90-110',
      callsText: 'Calls/Week',
      price: '$1,627',
      features: [
        { label: 'Talamarketers', value: '4' },
        { label: 'Hours/Day', value: '8' },
        { label: 'Days/Week', value: '5' },
        { label: 'Includes homeowners', value: 'Yes!' },
        { label: '100% exclusive', value: 'Yes!' },
        { label: 'Post to Velocify', value: 'Yes!' },
        { label: 'Dedicated reps', value: 'Yes!' },
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
            PRICING
          </div>
          <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose your package
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            No contracts. No commitments. Pay as you go each week.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg   flex flex-col"
              style={{
                border: '1px solid #DFE7EF',
                boxShadow: '0px 4px 11px 0px #657A8B1A'
              }}
            >
              {/* Header */}
              <div className="text-center mt-3 mb-6">
                <div className="text-secondary text-xl sm:text-2xl font-bold">
                  {plan.callsNumber}
                </div>
                <div className="text-secondary text-xl sm:text-2xl font-bold">
                  {plan.callsText}
                </div>
              </div>

              {/* Features List */}
              <div 
                className="flex-1 "
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid #DFE7EF',
                  borderBottom: '1px solid #DFE7EF'
                }}
              >
                <div className="space-y-4 py-4">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm sm:text-base px-4"
                    >
                      <span className="text-gray-600">{feature.label}:</span>
                      <span className="text-secondary font-semibold">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Button Container */}
              <div className="" style={{ backgroundColor: '#F7F8F9' }}>
                <div className="py-4 px-4">
                  {/* Price */}
                  <div className="text-center mb-4">
                    <div className="text-secondary text-2xl sm:text-3xl font-bold">
                      {plan.price} <span className=' text-normal font-normal text-lightblue'> Per week</span>
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-md font-semibold transition-opacity hover:opacity-90 ${
                      plan.highlighted
                        ? 'bg-primary text-secondary'
                        : 'bg-white border border-gray-300 text-secondary'
                    }`}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

