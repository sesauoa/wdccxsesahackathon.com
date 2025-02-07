'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Blobs = () => {
  const colors = {
    bg1: 'rgb(108, 0, 162)',
    bg2: 'rgb(0, 17, 82)',
    color1: 'rgb(8, 125, 241)',
    color2: 'rgb(73, 191, 170)',
    interactive: 'rgb(140, 100, 255)',
  };

  const commonBlobClasses =
    'absolute w-[80%] h-[80%] rounded-full mix-blend-hard-light';

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[rgb(0,17,82)]">
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="h-full w-full" style={{ filter: 'url(#goo) blur(40px)' }}>
        {/* Vertical Moving Blob */}
        <motion.div
          className={commonBlobClasses}
          style={{
            background: `radial-gradient(circle at center, ${colors.color1} 0%, rgba(8,125,241,0) 100%)`,
            top: '50%',
            left: '50%',
            translateX: '-50%',
          }}
          animate={{
            y: ['50%', '-50%', '50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Rotating Blob */}
        <motion.div
          className={commonBlobClasses}
          style={{
            background: `radial-gradient(circle at center, ${colors.color2} 0%, rgba(73,191,170,0) 100%)`,
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Offset Rotating Blob */}
        <motion.div
          className={`${commonBlobClasses} opacity-70`}
          style={{
            background: `radial-gradient(circle at center, ${colors.color1} 0%, rgba(8,125,241,0) 100%)`,
            top: 'calc(50% + 200px)',
            left: 'calc(50% - 500px)',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Horizontal Moving Blob */}
        <motion.div
          className={`${commonBlobClasses} opacity-70`}
          style={{
            background: `radial-gradient(circle at center, ${colors.color2} 0%, rgba(73,191,170,0) 100%)`,
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            x: ['-50%', '50%', '-50%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Interactive Blob */}
        <motion.div
          className="interactive absolute h-full w-full rounded-full opacity-70 mix-blend-hard-light"
          style={{
            background: `radial-gradient(circle at center, rgba(140,100,255,0.8) 0%, rgba(140,100,255,0) 50%)`,
            top: '-50%',
            left: '-50%',
          }}
          whileHover={{
            scale: 1.1,
          }}
        />
      </div>
    </div>
  );
};
