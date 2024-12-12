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
        image: '/images/2024/IMG_1849.JPG',
        alt: '',
      },
      {
        image: '/images/2024/IMG_2094.JPG',
        alt: '',
      },
      {
        image: '/images/2024/IMG_2368.JPG',
        alt: '',
      },
      {
        image: '/images/2024/IMG_2109.JPG',
        alt: '',
      },
      {
        image: '/images/2024/IMG_2425.JPG',
        alt: '',
      },
      {
        image: '/images/2024/IMG_2117.JPG',
        alt: '',
      },
    ],
  },
  {
    year: 2023,
    images: [
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0800.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0588.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0281.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0356.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0444.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0492.jpg',
        alt: '',
      },


    ],
  },
  {
    year: 2022,
    images: [
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg',
        alt: '',
      },
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0222.jpg',
        alt: '',
      },
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0052.jpg',
        alt: '',
      },
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0042.jpg',
        alt: '',
      },
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0155.jpg',
        alt: '',
      },
      {
        image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0209.jpg',
        alt: '',
      },

    ],
  },
  {
    year: 2021,
    images: [
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0281.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0356.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0444.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0492.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0588.jpg',
        alt: '',
      },
      {
        image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0800.jpg',
        alt: '',
      },
    ],
  },
];

export default galleryImages;
