import React from 'react';
import { H1, Section } from '../common/Typography';
import { SponsorScroller } from '../sponsors/SponsorScroller';
import { SponsorCarousel } from '../sponsors/SponsorCarousel';
import { TechSponsors } from '@/data/Sponsors';
import Image from 'next/image';
const Sponsors = () => {
  return (
    <Section id="sponsors">
      <H1>Sponsors</H1>
      <SponsorCarousel>
        {TechSponsors.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.src}
            width={400}
            height={400}
            alt={sponsor.name}
            style={{
              objectFit: 'contain',
            }}
          />
        ))}
      </SponsorCarousel>
    </Section>
  );
};

export default Sponsors;
