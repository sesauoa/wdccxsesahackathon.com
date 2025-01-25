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

  return (
    <motion.div className='img-grid'>
      {data.map((image, index) => (
        <motion.div
          key={index}
          className="gallery-img-wrapper"
          onClick={() => handleClick(index)}>
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