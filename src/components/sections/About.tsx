'use client';

import React from 'react';
import { H1, Section, StatHeading } from '../common/Typography';
import { AboutUs, EventStats } from '@/data/about';
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
        <p className="w-[80vw] pb-3 text-2xl leading-normal lg:absolute lg:left-[10vw] lg:top-[14vw] lg:w-[40vw] mt-2">
          {AboutUs}
        </p>

        <motion.div
          className="mx-auto flex w-[50vw] flex-row flex-wrap items-center justify-center gap-[3.5vw] gap-y-3 pt-3 lg:absolute lg:right-[10vw] lg:top-[10vw] lg:w-[30vw]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          {EventStats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    delay: index * 0.2,
                  },
                },
              }}
            >
              <StatHeading>{stat.data}</StatHeading>
              <h2 className="font-medium md:text-lg">{stat.heading}</h2>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
};

export default About;
