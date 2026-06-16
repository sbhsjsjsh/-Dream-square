import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: 'Dream Square Property mumbai | Trusted Real Estate Services in mumbai',
  description: 'Find verified flats, plots, and apartments with Dream Square Property. Trusted real estate services and premium property deals.',
  icons: {
    icon: 'https://i.ibb.co/KjgV5JxY/3b9fcb095bfe879d76592786b10c7972.jpg',
  },
  openGraph: {
    title: 'Dream Square Property mumbai | Trusted Real Estate Services in mumbai',
    description: 'Find verified flats, plots, and apartments with Dream Square Property. Trusted real estate services and premium property deals.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
