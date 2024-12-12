import React from 'react';
import { Section } from '../common/Typography';
import CombinedLogos from '../common/CombinedLogos';

const Hero = () => {
  return (
    <Section id="home" className="space-y-3">
      <CombinedLogos />
      <h1 className="text-8xl font-bold">HACKATHON</h1>
      <p className="text-3xl">New Zealand's LARGEST tertiary hackathon</p>
    </Section>
  );
};

export default Hero;
