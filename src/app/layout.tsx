import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/common/Footer';
import { CursorAnimation } from '@/utils/CursorAnimation';
import { Blobs } from '@/components/layout/Blobs';
import LenisScroll from '@/lib/LenisScroll';
import favicon from '../../public/svgs/favicon.svg';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'WDCC x SESA Hackathon',
  description: "NZ's LARGEST tertiary hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link
          rel="icon"
          href={favicon.src}
          type="image/<generated>"
          sizes="<generated>"
        />
        <LenisScroll>
          <Blobs />
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
          <CursorAnimation />
        </LenisScroll>
      </body>
    </html>
  );
}
