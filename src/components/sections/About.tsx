import React from 'react';
import { AboutUs, EventStats } from '@/data/about';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex h-auto w-full flex-col items-center justify-center"
    >
      <div className="text-[clamp(1.5rem,1.2391rem+1.3043vw,2.25rem)] font-bold leading-normal tracking-[0.12vw]">
        About
      </div>
      <div className="pb-3 text-lg font-light leading-normal md:text-xl">
        {AboutUs}
      </div>

      <div className="mx-auto flex w-4/5 flex-row flex-wrap items-center justify-center gap-[3.5vw] pt-3">
        <div className="relative flex flex-col items-center">
          <div className="text-2xl font-semibold md:text-4xl">
            {EventStats.hackers}
          </div>
          <div className="font-medium md:text-lg">hackers</div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="text-2xl font-semibold md:text-4xl">
            {EventStats.teams}
          </div>
          <div className="font-medium md:text-lg">teams</div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="text-2xl font-semibold md:text-4xl">
            {EventStats.sponsors}
          </div>
          <div className="font-medium md:text-lg">sponsors</div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="text-2xl font-semibold md:text-4xl">
            {EventStats.prizes}
          </div>
          <div className="font-medium md:text-lg">in prizes</div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="text-2xl font-semibold md:text-4xl">
            {EventStats.duration}
          </div>
          <div className="font-medium md:text-lg">hours</div>
        </div>
      </div>
    </section>
  );
};

export default About;
