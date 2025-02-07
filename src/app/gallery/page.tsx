'use client';
import { H1 } from '@/components/layout/Typography';
import Gallery from '@/app/gallery/_components/Gallery';
import { SectionLayout } from '@/components/layout/SectionLayout';
import FilterButton from '@/components/common/FilterButton';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <SectionLayout className="m-5 flex flex-col p-4">
      <H1 className="">Gallery</H1>
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          {[2024, 2023, 2022, 2021].map((year) => (
            <FilterButton
              key={year}
              onClick={() => {
                scrollToYearSection(year);
                setSelectedYear(year);
              }}
              isSelected={selectedYear === year}
            >
              {year}
            </FilterButton>
          ))}
        </div>
      </div>
      <div className="w-full">
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
