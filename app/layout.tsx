import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { MobileBookingButton } from '@/components/MobileBookingButton';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600']
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Riad Antara – Luxury Boutique Riad in Marrakech',
  description:
    'A secluded luxury boutique riad in Marrakech offering curated suites, private hammam rituals, and bespoke cultural experiences.',
  openGraph: {
    title: 'Riad Antara – Luxury Boutique Riad in Marrakech',
    description:
      'Reserve a luxury stay at Riad Antara, a refined boutique riad with private suites, spa rituals, and curated experiences.',
    url: 'https://riadantara.com',
    siteName: 'Riad Antara',
    images: [
      {
        url: '/images/hero.svg',
        width: 1200,
        height: 630,
        alt: 'Riad Antara rooftop terrace'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://riadantara.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileBookingButton />
      </body>
    </html>
  );
}
