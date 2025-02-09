import React from 'react';
import { H2 } from '@/components/Layout/Typography';
import SponsorCard from './SponsorCard';

interface SponsorRowProps {
  title: string;
  titleColor: string;
  sponsors: { name: string; src: string; link: string }[];
}

export const SponsorRow = ({
  title,
  titleColor,
  sponsors,
}: SponsorRowProps) => {
  return (
    <>
      <H2 className={`${titleColor} text-center`}>{title}</H2>
      <div className="flex flex-wrap justify-center gap-12 md:justify-start">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            color="bg-wdcc-blue"
            name={sponsor.name}
            src={sponsor.src}
            alt={sponsor.name}
            link={sponsor.link}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
