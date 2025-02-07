import React from 'react';
import { H1 } from '@/components/pog/Typography';

import { SponsorRow } from './SponsorRow';
import { TechSponsors } from '@/app/(home)/_data/SponsorData';

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative flex flex-col gap-8">
      <H1 className="mb-4">Sponsors</H1>
      <SponsorRow
        title="Gold Sponsors"
        titleColor="text-[#FFD700]"
        sponsors={TechSponsors.GoldSponsors}
      />
      <SponsorRow
        title="Silver Sponsors"
        titleColor="text-[#C0C0C0]"
        sponsors={TechSponsors.SilverSponsors}
      />
      <SponsorRow
        title="Bronze Sponsors"
        titleColor="text-[#CD7F32]"
        sponsors={TechSponsors.BronzeSponsors}
      />
    </section>
  );
};

export default Sponsors;
