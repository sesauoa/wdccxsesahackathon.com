'use client';

import React from 'react';
import { H1, StatHeading } from '@/components/layout/Typography';
import { AboutUs, EventStats } from '../_data/AboutData';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-12 lg:flex-row"
    >
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <H1 className="leading-normal tracking-[0.12vw]">About</H1>
        <p className="max-w-2xl leading-normal lg:text-2xl">{AboutUs}</p>
      </div>

      <motion.div
        className="flex flex-row flex-wrap items-center justify-center gap-8 lg:w-[500px]"
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
            className="flex flex-col items-center space-y-2"
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
            <h2 className="text-center font-medium md:text-lg">
              {stat.heading}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
