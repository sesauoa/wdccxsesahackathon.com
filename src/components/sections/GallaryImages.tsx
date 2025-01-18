import { FC } from 'react';
import Image from 'next/image';
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
    <div className='img-grid'>
      {data.map((image, index) => (
        <div
          key={index}
          className="gallery-img-wrapper"
          onClick={() => handleClick(index)}>
          <Image
            src={image.src}
            alt={`Image for ${image.year}`}
            className="gallery-image"
            width={500} // Explicit size
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;