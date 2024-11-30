export type Image = {
  image: string;
  alt: string;
}

export type ImageCollection = {
  year: number;
  theme: string;
  images: Image[];
}

const galleryImages: ImageCollection[] = [
  {
    year: 2024,
    theme: '',
    images: [
      {
        image: '/images/IMG_1849.JPG',
        alt: '',
      },
      {
        image: '/images/IMG_2094.JPG',
        alt: '',
      },
    ],
  },
  // {
  //   year: 2023,
  //   theme: '',
  //   images: [
  //     {
  //       image: '/images/IMG_2094.JPG',
  //       alt: ''
  //     }
  //   ]
  // },
  // {
  //   year: 2022,
  //   theme: '',
  //   images: [
  //     {
  //       image: '',
  //       alt: ''
  //     }
  //   ]
  // },
  // {
  //   year: 2021,
  //   theme: '',
  //   images: [
  //     {
  //       image: '',
  //       alt: ''
  //     }
  //   ]
  // },
];

export default galleryImages;
