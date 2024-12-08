'use client';

import React from 'react';
import { H1, Section, StatHeading } from '../common/Typography';
import { AboutUs, EventStats } from '@/data/About';
import { motion } from 'motion/react';
const About = () => {
  return (
    <>
      <Section
        id="about"
        className="relative flex select-none flex-col items-center justify-center"
      >
        <H1 className="leading-normal tracking-[0.12vw] lg:absolute lg:left-[10vw] lg:top-[8.5vw] xl:top-[10vw]">
          About
        </H1>
        <p className="w-[80vw] pb-3 text-xl font-light leading-normal lg:absolute lg:left-[10vw] lg:top-[14vw] lg:w-[35vw]">
          {AboutUs}
        </p>
        <motion.div className="" animate={{ x: 100 }}>
          hello from anton
        </motion.div>
        <div className="mx-auto flex w-[50vw] flex-row flex-wrap items-center justify-center gap-[3.5vw] gap-y-3 pt-3 lg:absolute lg:right-[10vw] lg:top-[12vw] lg:w-[30vw]">
          {EventStats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <StatHeading>{stat.data}</StatHeading>
              <h2 className="font-medium md:text-lg">{stat.heading}</h2>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
