import React from 'react';
import { H1 } from '@/components/Layout/Typography';
import { SectionLayout } from '@/components/Layout/SectionLayout';

import { TechSponsors } from '@/app/(home)/_data/Sponsors';

import SponsorCard from './SponsorCard';
const Sponsors = () => {
  return (
    <SectionLayout id="sponsors" className="relative">
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
    </SectionLayout>
  );
};

export default Sponsors;
