import React from 'react';
import { H1 } from '@/components/Layout/Typography';

import { SponsorRow } from './SponsorRow';
import { TechSponsors } from '@/app/(home)/_data/SponsorData';

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative flex flex-col gap-8">
      <H1 className="mb-4">Sponsors</H1>
      <SponsorRow
        titleColor="text-white"
        title="Tech Sponsors"
        sponsors={TechSponsors.TechSponsors}
      />
      <SponsorRow
        titleColor="text-white"
        title="Food Sponsors"
        sponsors={TechSponsors.FoodSponsors}
      />
    </section>
  );
};

export default Sponsors;
