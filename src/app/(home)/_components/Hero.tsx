import React from 'react';

import CombinedLogos from '../../../components/common/CombinedLogos';
import { CountdownTimer } from '../../../components/common/CountdownTimer';
const Hero = () => {
  return (
    <section
      className="responsive-fullwidth relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/2024/IMG_2366.JPG)' }}
    >
      <div className="absolute inset-0 z-0 brightness-75 backdrop-blur-sm"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div
          className="flex w-full flex-col items-center justify-center"
          id="home"
        >
          <CombinedLogos />
          <h1 className="md:7xl text-6xl font-bold lg:text-8xl">HACKATHON</h1>
          <p className="text-2xl md:text-3xl">
            New Zealand's LARGEST tertiary hackathon
          </p>
        </div>

        <CountdownTimer className="pt-12" />
      </div>
    </section>
  );
};

export default Hero;
