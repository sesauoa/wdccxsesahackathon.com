'use client';

import React, { useState } from 'react';
import faqInfo from '@/data/faqs';
import { H1, Section } from '../common/Typography';

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Section id="faqs">
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
    </Section>
  );
};

export default Faqs;
