
import { H1 } from '@/components/common/Typography';
import yearImages from '@/data/GallaryImages';
import Gallery from '@/components/sections/Gallery';
import '@/styles/gallery.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <H1>Gallery</H1>
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
