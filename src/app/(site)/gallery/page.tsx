import Reveal from '../../../components/Reveal';
import Gallery from '../../../components/Gallery';
import { galleryItems } from '../../../data/media';

export const metadata = { title: 'Gallery — Philippine Stagers Foundation' };

export default function GalleryPage() {
  return (
    <Reveal>
      <section>
        <div className="section-label">Behind the curtain</div>
        <h2>Moments from the stage.</h2>

        {galleryItems.length > 0 ? (
          <Gallery items={galleryItems} />
        ) : (
          <p className="empty-state">
            Photos and videos coming soon — drop files into <code>public/gallery</code> and list
            them in <code>src/data/media.ts</code>.
          </p>
        )}
      </section>
    </Reveal>
  );
}
