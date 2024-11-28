'use client';

import React, { useState } from 'react';
import faqInfo from '@/data/Faqs';

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="faqs" className="h-screen w-full p-20">
      <h1 className="mb-8 text-4xl font-bold">FAQs</h1>
      <div className="flex flex-col space-y-4">
        {faqInfo.map((faq, index) => (
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
    </section>
  );
};

export default Faqs;
