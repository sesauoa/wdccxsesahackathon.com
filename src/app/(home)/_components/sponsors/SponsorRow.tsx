import React from 'react';
import { H2 } from '@/components/layout/Typography';
import SponsorCard from './SponsorCard';

interface SponsorRowProps {
  title: string;
  titleColor: string;
  sponsors: { name: string; src: string }[];
}

export const SponsorRow = ({
  title,
  titleColor,
  sponsors,
}: SponsorRowProps) => {
  return (
    <>
      <H2 className={titleColor}>{title}</H2>
      <div className="flex flex-wrap gap-12">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            color="bg-wdcc-blue"
            name={sponsor.name}
            src={sponsor.src}
            alt={sponsor.name}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
