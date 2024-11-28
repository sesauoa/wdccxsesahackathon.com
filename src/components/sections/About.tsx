import React from 'react';
import { H1, Section } from '../common/Typography';
import { AboutUs, EventStats } from '@/data/about';

const About = () => {
  return (
    <Section
      id="about"
      className="relative flex flex-col items-center justify-center"
    >
      <H1 className="leading-normal tracking-[0.12vw] lg:absolute lg:left-[10vw] lg:top-[8.5vw] xl:top-[10vw]">
        About
      </H1>
      <div className="w-[80vw] pb-3 text-xl font-light leading-normal lg:absolute lg:left-[10vw] lg:top-[14vw] lg:w-[35vw]">
        {AboutUs}
      </div>

      <div className="lg:w-30 mx-auto flex w-[40vw] flex-row flex-wrap items-center justify-center gap-[3.5vw] gap-y-3 pt-3 lg:absolute lg:right-[10vw] lg:top-[12vw]">
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.hackers}</H1>
          <div className="font-medium md:text-lg">hackers</div>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.teams}</H1>
          <div className="font-medium md:text-lg">teams</div>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.sponsors}</H1>
          <div className="font-medium md:text-lg">sponsors</div>
        </div>

        <div className="relative flex flex-col items-center">
          <H1>{EventStats.prizes}</H1>
          <div className="font-medium md:text-lg">in prizes</div>
        </div>
        <div className="relative flex flex-col items-center">
          <H1>{EventStats.duration}</H1>
          <div className="font-medium md:text-lg">hours</div>
        </div>
      </div>
    </Section>
  );
};

export default About;
