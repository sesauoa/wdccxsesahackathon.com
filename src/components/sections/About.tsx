import React from 'react';
import { AboutUs, EventStats } from '@/data/about';

const About = () => {
  return (
    <section id="about" className="h-screen w-full p-20">
      <div id="about-left">
        <h1 className="text-4xl font-bold">About</h1>
        <p>{AboutUs}</p>
      </div>
      <div id="about-right">
        <div>
          <h1 className="text-4xl font-bold">{EventStats.hackers}</h1>
          <p className="text-sm text-gray-600">hackers</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{EventStats.teams}</h1>
          <p className="text-sm text-gray-600">teams</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{EventStats.sponsors}</h1>
          <p className="text-sm text-gray-600">sponsors</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{EventStats.prizes}</h1>
          <p className="text-sm text-gray-600">prizes</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{EventStats.duration}</h1>
          <p className="text-sm text-gray-600">hours</p>
        </div>
      </div>
    </section>
  );
};

export default About;
