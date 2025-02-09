import About from '@/app/(home)/_components/About';
import Faqs from '@/app/(home)/_components/Faqs';
import Hero from '@/app/(home)/_components/Hero';
import Sponsors from './_components/sponsors/Sponsor';
import { StandardLayout } from '@/components/layout/StandardLayout';

import ImageCarousel from '@/app/(home)/_components/ImageCarousel';
export default function Home() {
  return (
    <StandardLayout className="items-center justify-center">
      <Hero />
      <About />
      <ImageCarousel />
      <Faqs />
      <Sponsors />
    </StandardLayout>
  );
}
