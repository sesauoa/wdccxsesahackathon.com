import About from '@/app/(home)/_components/About';
import Faqs from '@/app/(home)/_components/Faqs';
import Hero from '@/app/(home)/_components/Hero';
import Sponsors from './_components/sponsors/SponsorSection';

import ImageCarousel from '@/app/(home)/_components/ImageCarousel';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ImageCarousel />
      <Faqs />
      <Sponsors />
    </div>
  );
}
