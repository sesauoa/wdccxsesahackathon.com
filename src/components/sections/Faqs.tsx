'use client';

import faqInfo from '@/data/faqs';
import { H1, Section } from '../common/Typography';
import Accordion from '../common/Accordion';

const Faqs = () => {
  return (
    <Section id="faqs">
      <H1 className="mb-8">FAQs</H1>
      <Accordion info={faqInfo} />
    </Section>
  );
};

export default Faqs;
