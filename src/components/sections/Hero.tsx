import React from 'react';
import { Section } from '../common/Typography';
import CombinedLogos from '../common/CombinedLogos';

const Hero = () => {
  return (
    <Section id="home" className="space-y-3 flex">
      <div className='justify-center flex flex-col -mt-32 ml-24'>
        <CombinedLogos />
        <h1 className="text-8xl font-bold">HACKATHON</h1>
        <p className="text-3xl">New Zealand's LARGEST tertiary hackathon</p>
      </div>
    </Section>
  );
};

export default Hero;
