import React, { useState } from "react";

const OurLeads = () => {
  const [isExpanded1, setIsExpanded1] = useState(true);
  const [isExpanded2, setIsExpanded2] = useState(true);

  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="h-1 bg-primary rounded-t-lg"></div>

            <div className="p-6 sm:p-8">
              <div className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
                OUR LEADS
              </div>

              <h2 className="text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Get double the return on your marketing dollars. Best of all,
                the PR-CRM is free.
              </h2>

              {isExpanded1 && (
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    The ProspectRoute CRM is a very robust and effective tool
                    created specifically and exclusively for insurance agents.
                    PR-CRM automates and prioritizes calls, leads, emails, and
                    SMS’s. It can be easily configured to run your entire
                    agency, just a part of it, or to only work with
                    ProspectRoute leads. However, we’re positive that once you
                    start using it, you’ll decide to use it for your entire
                    agency and all your lead vendors. What makes PR-CRM so good?
                    When used in agency mode PR-CRM enforces high contact rates
                    and high outreach by your producers to all the leads you
                    have loaded into it. Additionally, PR-CRM acts as air
                    traffic control between new leads coming in (from web or
                    live transfer), recent leads that need followup, old leads
                    needing some love, and existing customer service calls.
                    Producers and agency employees who use PR-CRM spend an
                    average of 40% more talking to clients per day, make 60%
                    more calls per day, and close 25% more business in a month
                    than if they were using legacy insurance management
                    products. This is what happens when you integrate and unify
                    all communication methods. If you want to limit PR-CRM’s
                    role in your agency that works too. PR-CRM can be used by
                    just a few producers or can be used as a communications-free
                    system that just organizes your leads and tells your
                    producers who should be called next. Worried about phone
                    system stuff? If you’re in a situation where you can’t have
                    PR-CRM make its own phone calls then don’t worry. PR-CRM can
                    integrate with your existing phone system with 0
                    interruption or configuration needed by anyone. The PR-CRM
                    can route all of it’s inbound and outbound calls through
                    your existing phone system regardless of who the provider
                    is. Remember, PR-CRM is still pretty effective without any
                    communication abilities. The best part is it’s FREE. When
                    you buy leads from ProspectRoute you get PR-CRM free for any
                    week where you have an active order. On weeks when you want
                    to take a break PR-CRM is very reasonably priced.
                  </p>

              

                 
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={toggleExpand1}
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-md bg-white text-secondary text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
                >
                  {isExpanded1 ? (
                    <>
                      Click to read less
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      Click to read more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <button className="bg-primary text-secondary px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity">
                  Get pricing
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="h-1 bg-primary rounded-t-lg"></div>

            <div className="p-6 sm:p-8">
              <div className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
                OUR LEADS
              </div>

              <h2 className="text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                WARNING: Our leads may cause a sense of euphoria, relief, or
                satisfaction. Seek medical attention.
              </h2>

              {isExpanded2 && (
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    ProspectRoute can deliver as many leads as you want per day.
                    It has the ability to keep all of your producers busy all
                    day long. They will go home tired, but satisfied their
                    commissions are increasing.
                  </p>

                  <p>
                    We turn over rocks looking for leads and sources. We contact
                    web leads old and new that our system predicts your
                    underwriting will be competitive with. We have a nice but
                    quick conversation with them to collect just enough
                    information to make it a quality lead. We do this to lessen
                    the friction of having the lead repeat information to you.
                  </p>

                  <p>
                    Typically we collect the primary's name, email, phone,
                    address or partial address, basic vehicle information, and
                    homeowner status and information. If our system believes
                    this information is a match for your carrier(s), it will
                    send it This information is passed to you to call and close.
                  </p>

                  <p>
                    When paired with the PR-CRM leads are twice as likely to
                    close.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={toggleExpand2}
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-md bg-white text-secondary text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
                >
                  {isExpanded2 ? (
                    <>
                      Click to read less
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      Click to read more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <button className="bg-primary text-secondary px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity">
                  Get pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeads;
