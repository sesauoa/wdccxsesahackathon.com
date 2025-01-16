import About from '@/components/sections/About';
import Faqs from '@/components/sections/Faqs';
import Hero from '@/components/sections/Hero';
import Sponsors from '@/components/sections/sponsors/SponsorSection';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Faqs />
      <Sponsors />
    </div>
  );
}
