'use client';

import React, { useState } from 'react';
import { registrationFaqsInfo } from '@/app/registration/_data/registrationFaqs';
import { H1, H2 } from '@/components/layout/Typography';
import { CountdownTimer } from '@/components/common/CountdownTimer';
import { StandardLayout } from '@/components/layout/StandardLayout';

export default function Registration() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <StandardLayout>
      <H1 className="">Registration</H1>
      <div className="flex w-full">
        <div className="w-full">
          {/* FOR WHEN REGISTRATIONS ARE CLOSED */}
          <H2 className="text-center text-4xl md:text-center">
            COMING SOON...
          </H2>
          <CountdownTimer />

          {/* FOR WHEN REGISTRATIONS ARE OPEN */}
          {/* <iframe
            src={FORM_URL}
            width="100%"
            height="1000px"
            className="mx-auto w-full max-w-3xl rounded-lg border bg-white shadow-md"
            title="Registration Form"
          >
            Loading…
          </iframe> */}

          {/* FAQ Section */}
          <div className="mt-8" id="faqs">
            <div className="flex flex-col space-y-4">
              {registrationFaqsInfo.map((faq, index) => (
                <div
                  key={index}
                  className={`collapse collapse-arrow ${
                    openAccordion === index ? 'collapse-open' : 'collapse-close'
                  } w-full rounded-lg border border-gray-300 bg-white`}
                >
                  <div
                    className="collapse-title cursor-pointer text-xl font-medium text-black lg:text-2xl"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-lg text-black lg:text-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
