'use client';

import React, { useState } from 'react';
import faqInfo from '../_data/FaqsData';
import { H1 } from '../../../components/layout/Typography';

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="faqs" className="mb-10">
      <H1 className="mb-8">FAQs</H1>
      <div className="flex flex-col space-y-4">
        {faqInfo.map((faq, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow ${
              openAccordion === index ? 'collapse-open' : 'collapse-close'
            } rounded-lg border border-gray-300 bg-white`}
          >
            <div
              className="collapse-title cursor-pointer text-xl font-medium text-black lg:text-2xl"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-lg text-black lg:text-xl">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
