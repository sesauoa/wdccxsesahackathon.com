'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/clsx';

interface MarqueeProps {
  images: { name: string; src: string }[];
  from: number;
  to: string;
  className?: string;
}
const Marquee = ({ images, from, to, className }: MarqueeProps) => {
  return (
    <div className={cn('flex overflow-hidden', className)}>
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <Image
              alt={image.name}
              width={500}
              height={500}
              className="pr-20"
              style={{
                objectFit: 'contain',
              }}
              src={image.src}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <Image
              alt={image.name}
              width={500}
              height={500}
              className="pr-20"
              src={image.src}
              key={index}
              style={{
                objectFit: 'contain',
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
