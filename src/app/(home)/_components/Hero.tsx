import React from 'react';
import { Section } from '../../../components/common/Typography';
import CombinedLogos from '../../../components/common/CombinedLogos';
import { CountdownTimer } from '../../../components/common/CountdownTimer';
const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/2024/IMG_2366.JPG)' }}
    >
      <div className="absolute inset-0 z-0 backdrop-blur-sm"></div>
      <div className="relative z-10 flex h-full w-full">
        <Section
          id="home"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex w-full flex-col items-center justify-center">
            <CombinedLogos />
            <h1 className="md:7xl text-6xl font-bold lg:text-8xl">HACKATHON</h1>
            <p className="text-2xl md:text-3xl">
              New Zealand's LARGEST tertiary hackathon
            </p>
          </div>
          <div className="pt-40">
            <CountdownTimer className="" />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Hero;
