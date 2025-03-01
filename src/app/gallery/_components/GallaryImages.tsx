import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import containerVariants from '@/styles/containerVariants';
import cardVariants from '@/styles/cardVariants';

interface ImagesProps {
  data: {
    src: string;
    year: number;
  }[];
  onClick: (index: number) => void;
}

const GalleryImages: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClick = (index: number) => {
    onClick(index);
  };

  return (
    <motion.div
      className="box-border flex w-full flex-wrap justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((image, index) => (
        <motion.div
          key={index}
          className="flex h-[300px] w-[400px] items-center justify-center overflow-hidden p-2.5"
          onClick={() => handleClick(index)}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={image.src}
            alt={`Image for ${image.year}`}
            className="h-full w-full cursor-pointer rounded object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryImages;
