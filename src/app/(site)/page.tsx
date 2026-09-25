import Image from 'next/image';
import Link from 'next/link';
import ShowCard from '../../components/ShowCard';
import Reveal from '../../components/Reveal';
import StatCounter from '../../components/StatCounter';
import HeroSpotlight from '../../components/HeroSpotlight';
import Gallery from '../../components/Gallery';
import { shows } from '../../data/shows';
import { galleryItems } from '../../data/media';

const stats = [
  { value: String(shows.length), label: 'Original Productions' },
  { value: '2001', label: 'Founded' },
  { value: '7', label: 'FAMAS Awards for Katips (2022)' },
  { value: 'Nationwide', label: 'Touring Reach' },
];

export default function HomePage() {
  const featured = shows.filter((show) => show.status === 'current');
  const galleryPreview = galleryItems.slice(0, 10);

  return (
    <>
      <section className="hero">
        <div className="hero-video-bg" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <HeroSpotlight />
        <div className="hero-content">
          <div className="kicker">Philippine Stagers Foundation</div>
          <h1>Empowering the Youth through Original Filipino Theatre</h1>
          <p className="lede">
            For over two decades, PSF has brought multi-award-winning original musicals,
            historical sarswelas, and transformative live performances to millions of
            students and audience members across the archipelago.
          </p>
          <div className="hero-actions">
            <Link href="/shows" className="cta">Explore Shows</Link>
            <Link href="/about" className="cta ghost">Our Story & Legacy</Link>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="featured-shows">
          <div className="section-label">Featured Show</div>
          <div className="section-heading">
            <h2>What&apos;s On Stage Right Now</h2>
            <Link href="/shows" className="cta ghost">See All Productions</Link>
          </div>
          {featured.length > 0 ? (
            <div className="prod-grid">
              {featured.map((show) => <ShowCard key={show.id} show={show} />)}
            </div>
          ) : (
            <p className="empty-state">
              No active tour dates right now — check out our full list of <Link href="/shows">past & upcoming productions</Link>.
            </p>
          )}
        </section>
      </Reveal>

      <section className="stat-strip">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-value"><StatCounter value={stat.value} /></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="founder-teaser">
        <div className="founder-teaser-photo">
          <Image
            src="/about/vince-tanada.jpg"
            alt="Atty. Vincent 'Vince' M. Tañada, Founder & Artistic Director of PSF"
            width={200}
            height={200}
          />
        </div>
        <div className="section-label">Led by an award-winning artist</div>
        <h2>One man&apos;s mission to put Filipino history on stage.</h2>
        <p>
          Atty. Vincent &ldquo;Vince&rdquo; M. Tañada — FAMAS Best Director, Best Actor, and
          Best Screenplay winner for <em>Katips</em> — founded PSF in 2001 to bring Filipino
          history and heritage to a new generation through original stage musicals.
        </p>
        <Link href="/about" className="cta">Meet Our Founder</Link>
      </section>

      <section className="gallery-preview">
        <div className="section-label">Behind the curtain</div>
        <h2>Moments from the stage.</h2>
        {galleryPreview.length > 0 ? (
          <>
            <Gallery items={galleryPreview} />
            <Link href="/gallery" className="cta ghost more-link">View Full Gallery</Link>
          </>
        ) : (
          <p className="empty-state">
            Photos and videos coming soon — see the <Link href="/gallery">gallery</Link>.
          </p>
        )}
      </section>

      <section className="cta-banner">
        <h2>Bring PSF to your school or community.</h2>
        <p>
          We tour nationwide with mobile stage productions built for students and local
          communities — inquire about bookings today.
        </p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>
    </>
  );
}
