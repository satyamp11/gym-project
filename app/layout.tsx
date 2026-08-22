import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GYM_CONFIG } from '@/lib/config';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: `${GYM_CONFIG.name} — ${GYM_CONFIG.tagline}`,
  description: `${GYM_CONFIG.shortDescription} Join for ${GYM_CONFIG.currencySymbol}${GYM_CONFIG.monthlyMembership}/month.`,
  keywords: ['gym', 'fitness', 'strength training', 'personal trainer', 'workout', 'bodybuilding', 'luxury gym'],
  openGraph: {
    title: `${GYM_CONFIG.name} — ${GYM_CONFIG.tagline}`,
    description: GYM_CONFIG.shortDescription,
    siteName: GYM_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-background text-foreground antialiased selection:bg-sky-400 selection:text-slate-950 font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
