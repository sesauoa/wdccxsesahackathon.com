import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import '@/styles/gallery.css';

interface ImagesProps {
  data: {
    src: string;
    year: number;
  }[],
  onClick: (index: number) => void;
}

const GalleryImages: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClick = (index: number) => {
    onClick(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className='img-grid'
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {data.map((image, index) => (
        <motion.div
          key={index}
          className="gallery-img-wrapper"
          onClick={() => handleClick(index)}
          variants={cardVariants}
          initial="hidden"
          animate="visible">
          <Image
            src={image.src}
            alt={`Image for ${image.year}`}
            className="gallery-image"
            width={500}
            height={500}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryImages;