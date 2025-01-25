'use client';
import { H1 } from '@/components/common/Typography';
import Gallery from '@/components/sections/Gallery';
import '@/styles/gallery.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <H1>Gallery</H1>
      <div className="gallery-header">
        <div className="gallery-navigation-buttons">
          <button onClick={() => scrollToYearSection(2024)}>2024</button>
          <button onClick={() => scrollToYearSection(2023)}>2023</button>
          <button onClick={() => scrollToYearSection(2021)}>2022</button>
          <button onClick={() => scrollToYearSection(2021)}>2021</button>
        </div>
      </div>
      <div className="gallery">
        <Gallery year={2024} />
        <Gallery year={2023} />
        <Gallery year={2022} />
        <Gallery year={2021} />
      </div>
    </div>
  );
}

function scrollToYearSection(year: number) {
  const section = document.getElementById(`year-${year}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
