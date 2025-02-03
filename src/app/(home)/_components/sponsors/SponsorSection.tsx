import React from 'react';
import { H1 } from '@/components/Layout/Typography';
import { SectionLayout } from '@/components/Layout/SectionLayout';
import { SponsorRow } from './SponsorRow';
import { TechSponsors } from '@/app/(home)/_data/Sponsors';

const Sponsors = () => {
  return (
    <SectionLayout id="sponsors" className="relative flex flex-col gap-8">
      <H1 className="mb-4">Sponsors</H1>
      <SponsorRow
        title="Gold Sponsors"
        titleColor="text-yellow-400"
        sponsors={TechSponsors.GoldSponsors}
      />
      <SponsorRow
        title="Silver Sponsors"
        titleColor="text-slate-200"
        sponsors={TechSponsors.SilverSponsors}
      />
      <SponsorRow
        title="Bronze Sponsors"
        titleColor="text-yellow-700"
        sponsors={TechSponsors.BronzeSponsors}
      />
    </SectionLayout>
  );
};

export default Sponsors;
