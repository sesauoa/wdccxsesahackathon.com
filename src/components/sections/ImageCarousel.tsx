'use client';

import Image from 'next/image';
import { imgs } from '@/data/CarouselImages';

export default function ImageCarousel() {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    if (target) {
      document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <div className="h-[20vw] w-full overflow-hidden">
      <div className="carousel h-full w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src={imgs[0]}
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={imgs[1]} alt="Slide 2" layout="fill" objectFit="cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={imgs[2]} alt="Slide 3" layout="fill" objectFit="cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={imgs[3]} alt="Slide 4" layout="fill" objectFit="cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
