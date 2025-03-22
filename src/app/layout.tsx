import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
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
  title: {
    default: 'WDCC x SESA Hackathon',
    template: '%s | WDCC x SESA Hackathon',
  },
  description: "NZ's LARGEST tertiary hackathon",
  authors: [
    { name: 'WDCC', url: 'https://wdcc.co.nz/' },
    { name: 'SESA', url: 'https://sesa.org.nz/' },
  ],
  openGraph: {
    title: 'WDCC x SESA Hackathon',
    description: "NZ's LARGEST tertiary hackathon",
    url: 'https://wdccxsesahackathon.com/',
    images: 'https://wdccxsesahackathon.com/og-image.png',
    siteName: 'WDCC x SESA Hackathon',
  },
  keywords: [
    'WDCC x SESA',
    'WDCCxSESA',
    'WDCC x SESA Hackathon',
    'UoA hackathon',
    'University hackathon',
    'Tertiary hackathon NZ',
    'University of Auckland hackathon',
    'WDCC hackathon',
    'SESA hackathon',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-wdcc-gradient">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white antialiased`}
      >
        <link
          rel="icon"
          href={favicon.src}
          type="image/<generated>"
          sizes="<generated>"
        />
        {children}
      </body>
    </html>
  );
}
