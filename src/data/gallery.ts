// import type { Photo } from "react-photo-album";

// const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// export type Image = {
//   asset: string;
//   alt: string;
//   year: number;
//   width?: number;
//   height?: number;
// };

// const assetLink = (asset: string, width: number) => `${asset}?w=${width}`;

// const galleryImages: Image[] = [
//   // Images for 2024
//   { asset: '/images/2024/IMG_1849.JPG', alt: '', year: 2024, width: 500, height: 500 },
//   { asset: '/images/2024/IMG_2094.JPG', alt: '', year: 2024, width: 1080, height: 720 },
//   { asset: '/images/2024/IMG_2368.JPG', alt: '', year: 2024, width: 1080, height: 720 },
//   { asset: '/images/2024/IMG_2109.JPG', alt: '', year: 2024, width: 1080, height: 720 },
//   { asset: '/images/2024/IMG_2425.JPG', alt: '', year: 2024, width: 1080, height: 720 },
//   { asset: '/images/2024/IMG_2117.JPG', alt: '', year: 2024, width: 1080, height: 720 },
//   // Images for 2023
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0800.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0588.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0281.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0356.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0444.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   { asset: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0492.jpg', alt: '', year: 2023, width: 1080, height: 720 },
//   // Images for 2022
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0222.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0052.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0042.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0155.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   { asset: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0209.jpg', alt: '', year: 2022, width: 1080, height: 720 },
//   // Images for 2021
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0281.jpg', alt: '', year: 2021, width: 1080, height: 720 },
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0356.jpg', alt: '', year: 2021, width: 1080, height: 720 },
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0444.jpg', alt: '', year: 2021, width: 1080, height: 720 },
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0492.jpg', alt: '', year: 2021, width: 1080, height: 720 },
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0588.jpg', alt: '', year: 2021, width: 1080, height: 720 },
//   { asset: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0800.jpg', alt: '', year: 2021, width: 1080, height: 720 },
// ];

// const photos: Photo[] = galleryImages.map(
//   ({ asset, alt, year, width = 1080, height = 720 }) =>
//     ({
//       src: assetLink(asset, width),
//       alt: alt || 'Image description', // Fallback alt text
//       year: year,
//       width,
//       height,
//     }) as Photo
// );

// export default photos;


export type Image = {
  image: string;
  alt: string;
  year: number;
};

const galleryImages: Image[] = [
  // Images for 2024
  { image: '/images/2024/IMG_1849.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2094.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2368.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2109.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2425.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2117.JPG', alt: '', year: 2024 },
  // Images for 2023
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0800.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0588.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0281.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0356.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0444.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0492.jpg', alt: '', year: 2023 },
  // Images for 2022
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0222.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0052.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0042.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0155.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0209.jpg', alt: '', year: 2022 },
  // Images for 2021
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0281.jpg', alt: '', year: 2021 },
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0356.jpg', alt: '', year: 2021 },
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0444.jpg', alt: '', year: 2021 },
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0492.jpg', alt: '', year: 2021 },
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0588.jpg', alt: '', year: 2021 },
  { image: '/images/2021/WDCC_SESA_HACKATHON_2021_IMG0800.jpg', alt: '', year: 2021 },
];

export default galleryImages;
