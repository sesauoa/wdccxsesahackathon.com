'use client';

import React, { useState } from 'react';
import { FORM_URL } from "../../data/registrationdata";
import faqInfo from "@/data/Faqs";

export default function Registration() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full p-20 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-left">Registration</h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <iframe
            src={FORM_URL}
            width="100%"
            height="1000px"
            className="w-full max-w-3xl mx-auto border rounded-lg bg-white shadow-md"
            title="Registration Form"
          >
            Loading…
          </iframe>
          {/* FAQ Section */}
          <div className="mt-8" id="faqs">
            <div className="flex flex-col space-y-4">
              {faqInfo.slice(-3).map((faq, index) => (
                <div
                  key={index}
                  className={`collapse collapse-arrow ${
                    openAccordion === index ? 'collapse-open' : 'collapse-close'
                  } rounded-lg border border-gray-300 bg-white`}
                >
                  <div
                    className="collapse-title cursor-pointer text-xl font-medium text-black"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-black">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
