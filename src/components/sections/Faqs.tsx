'use client';

import React, { useState } from 'react';
import './Faqs.css';

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqInfo = [
    {
      question: 'What is WDCC?',
      answer:
        "WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, founded by two students at the University of Auckland. WDCC aims to bridge the gap between university knowledge and real-world industry practices. We run projects with real-world clients that solve real-world problems, generally for NFP organisations or other student clubs who don't have the funding to fund a solution themselves.",
    },
    {
      question: 'What is SESA?',
      answer:
        'SESA is the Software Engineering Students Association for students and alumni of the Software Engineering programme at the University of Auckland. We organise and run social and career-focused events for our 500+ members, connecting them with each other as well as industry professionals.',
    },
    {
      question: 'What is a hackathon?',
      answer:
        'A hackathon is an event where individuals or teams come together to collaboratively develop innovative solutions to specific problems within a limited time, usually ranging from 24 to 48 hours. Participants, often developers, designers, and entrepreneurs, brainstorm ideas, prototype software or hardware, and present their solutions to judges or stakeholders. Hackathons foster creativity, teamwork, and problem-solving, often focusing on themes like sustainability, healthcare, or technology innovation.',
    },
    {
      question: 'Can I sign up individually?',
      answer:
        'Yes, you can definitely sign up individually for this hackathon! We welcome solo participants and will provide opportunities to join a team at the event or work independently on your own project.',
    },
    {
      question: 'How many people in a team?',
      answer:
        'Teams can have up to 6 members for this hackathon. You can form a team beforehand or join one during the event.',
    },
  ];

  return (
    <section id="faqs" className="h-screen w-full p-20">
      <h1 className="mb-8 text-4xl font-bold">FAQs</h1>
      <div className="flex flex-col space-y-4">
        {faqInfo.map((faq, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow ${
              openAccordion === index ? 'collapse-open' : 'collapse-close'
            }`}
          >
            <div className="collapse-title" onClick={() => handleToggle(index)}>
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
