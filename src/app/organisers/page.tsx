'use client';

import React from 'react';
import { motion } from 'motion/react';
import organisers from '@/app/organisers/_data/organisers';
import { SectionLayout } from '@/components/Layout/SectionLayout';

interface TeamCardProps {
  img: string | null;
  name: string;
  title: string;
  linkedIn: string;
  club: string;
}

function TeamCard({ img, name, title, linkedIn, club }: TeamCardProps) {
  return (
    <motion.div
      className="group relative mx-auto w-48 overflow-hidden rounded-lg bg-black shadow-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <a href={linkedIn} target="_blank" className="block w-full h-full transition-transform duration-200 hover:scale-110">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={img || 'https://via.placeholder.com/96'}
            alt={name}
            className="h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-50"
          />
        </div>

        {/* Info */}
        <div className="bg-gray-0 absolute inset-0 flex flex-col items-center justify-center bg-opacity-0 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 select-none">
          <h5 className="text-xl font-semibold text-white">{name}</h5>
          <p className="mb-2 w-full max-w-[180px] break-words text-center text-sm font-semibold text-white">
            {title}
          </p>
          <img src={club} alt={name} className="mt-2 w-20" />
        </div>
      </a>
    </motion.div>
  );
}

function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <SectionLayout>
      <div className="container mx-auto max-w-screen-sm">
        <div className="mb-16 text-center lg:mb-20">
          <h1 className="my-2 text-2xl font-bold text-white lg:text-4xl">
            Organisers
          </h1>
        </div>
        <motion.div
          className="mt-6 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {organisers.map((member, index) => (
            <TeamCard
              key={index}
              img={member.image}
              name={member.name}
              title={member.role}
              linkedIn={member.linkedIn}
              club={member.club}
            />
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
}

export default TeamSection;
