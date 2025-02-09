import { motion } from 'framer-motion';
import { colors } from './Blobs';

interface BlobProps {
  className?: string;
  style: React.CSSProperties;
  animate: any;
  transition: any;
  isInteractive?: boolean;
}

export const VerticalBlob = () => (
  <motion.div
    className="absolute h-[80%] w-[80%] rounded-full mix-blend-hard-light"
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
);

export const RotatingBlob = () => (
  <motion.div
    className="absolute h-[80%] w-[80%] rounded-full mix-blend-hard-light"
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
);

export const OffsetRotatingBlob = () => (
  <motion.div
    className="absolute h-[80%] w-[80%] rounded-full opacity-70 mix-blend-hard-light"
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
);

export const HorizontalBlob = () => (
  <motion.div
    className="absolute h-[80%] w-[80%] rounded-full opacity-70 mix-blend-hard-light"
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
);

export const InteractiveBlob = () => (
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
);
