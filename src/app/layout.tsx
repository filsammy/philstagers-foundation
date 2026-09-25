import type { Metadata } from 'next';
import { Playfair_Display, Work_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Philippine Stagers Foundation',
  description:
    'Philippine Stagers Foundation — a Filipino theatre company staging original works for local and international audiences.',
  icons: {
    icon: '/psf_logo.png',
    apple: '/psf_logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${workSans.variable}`}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {children}
      </body>
    </html>
  );
}
