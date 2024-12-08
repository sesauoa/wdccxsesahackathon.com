
import { H1 } from '@/components/common/Typography';
import yearImages from '@/data/GallaryImages';
import Gallery from '@/components/sections/Gallery';
import '@/styles/gallery.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <header className="mb-8">
        <H1>Gallery</H1>
      </header>
      <Gallery />
    </div>

  );
}
