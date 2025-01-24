import About from '@/components/sections/About';
import Faqs from '@/components/sections/Faqs';
import Hero from '@/components/sections/Hero';
import Sponsors from '@/components/sections/Sponsors';
import CountdownTimer from '@/components/common/CountdownTimer';
import ImageCarousel from '@/components/sections/ImageCarousel';
export default function Home() {
  return (
    <div className="flex flex-col">
      <CountdownTimer />
      <Hero />
      <ImageCarousel />
      <About />
      <Faqs />
      <Sponsors />
    </div>
  );
}
