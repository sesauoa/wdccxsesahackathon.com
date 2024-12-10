export type Image = {
  image: string;
  alt: string;
}

export type ImageCollection = {
  year: number;
  images: Image[];
}

const galleryImages: ImageCollection[] = [
  {
    year: 2024,
    images: [
      {
        image: '/images/IMG_1849.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
    ],
  },
  {
    year: 2023,
    images: [
      {
        image: '/images/IMG_1849.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
    ],
  },
];

export default galleryImages;
