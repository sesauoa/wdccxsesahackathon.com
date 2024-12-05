
import React, { useState } from 'react';

export default function Accordion({ info }: { info: { question: string; answer: string }[] }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className='flex flex-col space-y-4'>
      {
        info.map((data, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow ${openAccordion === index ? 'collapse-open' : 'collapse-close'
              } rounded-lg border border-gray-300 bg-white`}
          >
            <div
              className="collapse-title cursor-pointer text-xl font-medium text-black"
              onClick={() => handleToggle(index)}
            >
              {data.question}
            </div>
            <div className="collapse-content">
              <p className="text-black">{data.answer}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
