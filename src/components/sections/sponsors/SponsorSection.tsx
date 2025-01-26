import React from 'react';
import { H1, Section } from '../../common/Typography';

import { TechSponsors } from '@/data/Sponsors';

import SponsorCard from './SponsorCard';
const Sponsors = () => {
  return (
    <Section id="sponsors" className="relative">
      <H1 className="mb-4">Sponsors</H1>
      <div className="flex flex-wrap gap-12">
        {TechSponsors.map((sponsor, index) => (
          <SponsorCard
            color="bg-wdcc-blue"
            name={sponsor.name}
            src={sponsor.src}
            alt={sponsor.name}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Sponsors;
