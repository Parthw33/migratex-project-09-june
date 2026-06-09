import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getGlobalComponent } from '@/lib/contentstack-api';
import type { HeaderEntry, FooterEntry } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Scaled Agile | Achieving Business Agility and Agile Planning',
  description: 'Scaled Agile helps organizations achieve business agility with SAFe.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let headerData: HeaderEntry = {};
  let footerData: FooterEntry = {};

  try {
    const [hd, fd] = await Promise.all([
      getGlobalComponent('header'),
      getGlobalComponent('footer'),
    ]);
    headerData = (hd as HeaderEntry) || {};
    footerData = (fd as FooterEntry) || {};
  } catch (error) {
    console.error('Error fetching global components:', error);
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ color: '#343333', backgroundColor: '#ffffff' }}>
        <Header {...headerData} />
        <main className="flex-1">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}