import Image from 'next/image';
import { galleryItems } from '../../../data/media';

export const metadata = { title: 'Gallery — Philippine Stagers Foundation' };

export default function GalleryPage() {
  return (
    <section>
      <div className="section-label">Behind the curtain</div>
      <h2>Moments from the stage.</h2>

      {galleryItems.length > 0 ? (
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <figure className="gallery-item" key={i}>
              {item.type === 'image' ? (
                <div className="frame">
                  <Image src={item.src} alt={item.caption ?? ''} fill />
                </div>
              ) : (
                <video src={item.src} poster={item.poster} controls />
              )}
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Photos and videos coming soon — drop files into <code>public/gallery</code> and list
          them in <code>src/data/media.ts</code>.
        </p>
      )}
    </section>
  );
}
