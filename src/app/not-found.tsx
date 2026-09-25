import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = { title: 'Intermission — Philippine Stagers Foundation' };

export default function NotFound() {
  return (
    <>
      <Nav />
      <section style={{ textAlign: 'center' }}>
        <div className="section-label">Intermission</div>
        <h2 style={{ margin: '0 auto 16px' }}>This scene hasn&apos;t been written yet.</h2>
        <p style={{ maxWidth: '52ch', margin: '0 auto 32px', opacity: 0.85 }}>
          The page you&apos;re looking for must have stepped off-stage — the curtain&apos;s
          already fallen on this one. Let&apos;s get you back to the main act.
        </p>
        <Link href="/" className="cta">Back to Home</Link>
      </section>
      <Footer />
    </>
  );
}
