import React from 'react';
import { H1, Section } from '../common/Typography';

import { TechSponsors } from '@/data/Sponsors';
import Marquee from '../Marquee';
const Sponsors = () => {
  return (
    <Section id="sponsors" className="relative">
      <H1>Sponsors</H1>
      <Marquee
        images={TechSponsors}
        from={0}
        to={'-100%'}
        className="absolute top-1/2 w-full -translate-y-1/2 transform"
      />
    </Section>
  );
};

export default Sponsors;
