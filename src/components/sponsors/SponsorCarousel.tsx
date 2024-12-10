'use client';

import { Children, ReactNode, cloneElement } from 'react';
import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

import { cn } from '@/lib/clsx';

interface MarqueeProps {
  className?: string;
  children?: ReactNode;
  reverseDirection?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
  gap?: string;
}

export const SponsorCarousel = ({
  className,
  children,
  reverseDirection = false,
  pauseOnHover = false,
  duration = 20,
  gap = '3rem',
}: MarqueeProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      const toX = reverseDirection ? '100%' : '-100%';

      await controls.start({
        x: toX,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: duration,
          },
        },
      });
    };

    animateScroll();
  }, [controls, reverseDirection, duration]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      // Resume the animation
      const toX = reverseDirection ? '100%' : '-100%';

      controls.start({
        x: toX,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: duration,
          },
        },
      });
    }
  };

  // Duplicate the children to create a seamless loop
  const duplicatedChildren = Children.toArray(children).map((child, index) =>
    cloneElement(child as React.ReactElement, { key: `original-${index}` })
  );

  const allChildren = [
    ...duplicatedChildren,
    ...duplicatedChildren.map((child, index) =>
      cloneElement(child as React.ReactElement, { key: `duplicate-${index}` })
    ),
  ];

  return (
    <div
      className={cn('flex overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ gap }}
    >
      <motion.div
        className="flex w-content w-max max-w-content items-center"
        animate={controls}
        style={{
          display: 'flex',
          gap: gap,
        }}
      >
        {allChildren}
      </motion.div>
    </div>
  );
};
