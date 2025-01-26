import React from 'react';
import { Section } from '../common/Typography';
import CombinedLogos from '../common/CombinedLogos';

const Hero = () => {
  return (
    <Section id="home" className="flex space-y-3">
      <div className="-mt-30 flex w-full flex-col items-center justify-center">
        <CombinedLogos />
        <h1 className="md:7xl text-6xl font-bold lg:text-8xl">HACKATHON</h1>
        <p className="text-2xl md:text-3xl">
          New Zealand's LARGEST tertiary hackathon
        </p>
      </div>
    </Section>
  );
};

export default Hero;
