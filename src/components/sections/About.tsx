import React from 'react';
import { H1, Section } from '../common/Typography';
import { AboutUs, EventStats } from '@/data/About';

const About = () => {
  return (
    <Section
      id="about"
      className="relative flex select-none flex-col items-center justify-center"
    >
      <H1 className="leading-normal tracking-[0.12vw] lg:absolute lg:left-[10vw] lg:top-[8.5vw] xl:top-[10vw]">
        About
      </H1>
      <p className="w-[80vw] pb-3 text-lg text-xl font-light leading-normal lg:absolute lg:left-[10vw] lg:top-[14vw] lg:w-[35vw]">
        {AboutUs}
      </p>

      <div className="mx-auto flex w-[40vw] flex-row flex-wrap items-center justify-center gap-[3.5vw] gap-y-3 pt-3 lg:absolute lg:right-[10vw] lg:top-[12vw] lg:w-1/5">
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.hackers}</H1>
          <h2 className="font-medium md:text-lg">hackers</h2>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.teams}</H1>
          <h2 className="font-medium md:text-lg">teams</h2>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.sponsors}</H1>
          <h2 className="font-medium md:text-lg">sponsors</h2>
        </div>

        <div className="relative flex flex-col items-center">
          <H1>{EventStats.prizes}</H1>
          <h2 className="font-medium md:text-lg">in prizes</h2>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.duration}</H1>
          <h2 className="font-medium md:text-lg">hours</h2>
        </div>
      </div>
    </Section>
  );
};

export default About;
