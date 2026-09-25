'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/shows', label: 'Shows' },
  { href: '/gallery', label: 'Gallery' },
];

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/philstagersofficial',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/philstagers',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@stagerschannel',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M21.8 8.001s-.2-1.4-.8-2.02c-.77-.8-1.63-.8-2.02-.85C16.06 5 12 5 12 5h-.001s-4.06 0-6.98.13c-.4.05-1.25.05-2.02.85-.6.62-.8 2.02-.8 2.02S2 9.64 2 11.28v1.44c0 1.64.2 3.28.2 3.28s.2 1.4.8 2.02c.77.8 1.78.77 2.23.86C6.94 19 12 19 12 19s4.06 0 6.98-.13c.4-.05 1.25-.05 2.02-.85.6-.62.8-2.02.8-2.02s.2-1.64.2-3.28v-1.44c0-1.64-.2-3.28-.2-3.28zM9.98 14.98v-5.5l4.7 2.75-4.7 2.75z" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className={`navlinks${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="nav-icons">
            <Link
              href="/"
              className="nav-logo"
              aria-label="Philstagers Foundation — home"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/psf_logo.png"
                alt="Philstagers Foundation logo"
                width={40}
                height={40}
                className="brand-logo"
                priority
              />
            </Link>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-actions">
          <Link href="/contact" className="cta nav-contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <button
            type="button"
            className={`nav-toggle${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
