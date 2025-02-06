'use client';
import { H1 } from '@/components/Layout/Typography';
import Gallery from '@/app/gallery/_components/Gallery';
import { SectionLayout } from '@/components/Layout/SectionLayout';

export default function GalleryPage() {
  return (
    <SectionLayout className="m-5 flex flex-col p-4">
      <H1 className="ml-[7vw]">Gallery</H1>
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          {[2024, 2023, 2022, 2021].map((year) => (
            <button
              key={year}
              onClick={() => scrollToYearSection(year)}
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-100 hover:text-blue-800"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Gallery year={2024} />
        <Gallery year={2023} />
        <Gallery year={2022} />
        <Gallery year={2021} />
      </div>
    </SectionLayout>
  );
}

function scrollToYearSection(year: number) {
  const section = document.getElementById(`year-${year}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
