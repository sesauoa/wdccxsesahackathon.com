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
  { image: '/images/2024/DSCF0159.JPG', alt: '', year: 2024 },
  { image: '/images/2024/DSCF0170.JPG', alt: '', year: 2024 },
  { image: '/images/2024/DSCF0171.JPG', alt: '', year: 2024 },
  { image: '/images/2024/DSCF0240.JPG', alt: '', year: 2024 },
  { image: '/images/2024/DSCF0259.JPG', alt: '', year: 2024 },
  { image: '/images/2024/DSCF0310.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1731.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1742.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1895.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1931.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1948.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_1972.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2001.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2009.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2167.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2185.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2199.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2224.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2254.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2273.JPG', alt: '', year: 2024 },
  { image: '/images/2024/IMG_2301.JPG', alt: '', year: 2024 },

  // Images for 2023
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0800.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0588.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0281.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0356.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0444.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0492.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0564.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_171748.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_173414.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_174355.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_180810.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_180904.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_182923.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_185316.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_20230806_203426.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0410.jpg', alt: '', year: 2023 },
  { image: '/images/2023/WDCC_SESA_HACKATHON_2023_IMG0635.jpg', alt: '', year: 2023 },
  { image: '/images/2023/A365A276-D5EA-4FC1-ABF5-EAEFC99D2493.jpg', alt: '', year: 2023 },
  { image: '/images/2023/D3089589-70FF-4F18-9AE9-7B78E28E65A6.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_8894.jpg', alt: '', year: 2023 },
  { image: '/images/2023/IMG_8886.jpg', alt: '', year: 2023 },

  // Images for 2022
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0222.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0052.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0042.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0155.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0209.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0026.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0025.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0010.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0064.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0065.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0149.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0151.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0155.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0157.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0159.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0160.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0167.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0180.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0178.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0224.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0229.jpg', alt: '', year: 2022 },
  { image: '/images/2022/WDCC_SESA_HACKATHON_2022_IMG0232.jpg', alt: '', year: 2022 },

  // Images for 2021
  { image: '/images/2021/20210801_173432.jpg', alt: '', year: 2021 },
  { image: '/images/2021/20210801_201741.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-104.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-129.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-130.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-142.jpg', alt: '', year: 2021 },
  { image: '/images/2021/IMG_20210731_162010_119.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-187.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-014.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-015.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-016.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-090.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-109.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-144.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-180.jpg', alt: '', year: 2021 },
  { image: '/images/2021/HACKATHON-184.jpg', alt: '', year: 2021 },
];

export default galleryImages;
