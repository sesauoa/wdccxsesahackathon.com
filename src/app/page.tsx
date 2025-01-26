import About from '@/components/sections/About';
import Faqs from '@/components/sections/Faqs';
import Hero from '@/components/sections/Hero';
import Sponsors from '@/components/sections/Sponsors';
import CountdownTimer from '@/components/common/CountdownTimer';
import ImageCarousel from '@/components/sections/ImageCarousel';
export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/2024/IMG_2366.JPG)' }}
      >
        <div className="absolute inset-0 z-0 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <Hero />
          <CountdownTimer />
        </div>
      </div>
      <ImageCarousel />
      <About />
      <Faqs />
      <Sponsors />
    </div>
  );
}
