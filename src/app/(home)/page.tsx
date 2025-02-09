import About from '@/app/(home)/_components/About';
import Faqs from '@/app/(home)/_components/Faqs';
import Hero from '@/app/(home)/_components/Hero';
import Sponsors from './_components/sponsors/Sponsor';
import { SectionLayout } from '@/components/SectionLayout';

import ImageCarousel from '@/app/(home)/_components/ImageCarousel';
export default function Home() {
  return (
    <SectionLayout className="items-center justify-center">
      <Hero />
      <About />
      <ImageCarousel />
      <Faqs />
      <Sponsors />
    </SectionLayout>
  );
}
