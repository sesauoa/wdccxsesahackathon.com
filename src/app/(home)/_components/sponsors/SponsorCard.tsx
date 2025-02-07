'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';
import ImageFit, { ImageFitProps } from '@/lib/ImageFit';
import { easeOutExpo } from '@/lib/ease';

interface SponsorCardProps extends ImageFitProps {
  color: string;
  name: string;
  link: string;
  link: string;
}

const SponsorCard = ({ color, name, link, ...image }: SponsorCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Link href={link}>
      <motion.div
          initial="hide"
          whileHover="show"
          className="relative cursor-pointer overflow-hidden rounded-xl p-4 px-8"
        >
          <motion.p
            variants={textvariants}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold drop-shadow-[0px_0px_4px_white]"
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            {name}
          </motion.p>
          <motion.div
            variants={imagevariants}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <ImageFit {...image} />
          </motion.div>
        </motion.div>
    </a>
    </Link>
  );
};

const textvariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const imagevariants: Variants = {
  hide: { scale: 1, filter: 'blur(0px)' },
  show: { scale: 0.8, filter: 'blur(4px)' },
};

export default SponsorCard;
