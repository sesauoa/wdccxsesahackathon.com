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
  title: 'WDCC x SESA Hackathon',
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
    'nz hackathon',
    'WDCCXSESA',
    'WDCC x SESA Hackathon',
    'WDCC Hackathon',
    'SESA Hackathon',
    'WDCCSESAHackathon',
    'WDCC SESA Hackathon',
    "New Zealand's LARGEST tertiary hackathon",
    "New Zealand's LARGEST university hackathon",
    'nz university hackathon',
    'UoA hackathon',
    '2025 UoA hackathon',
    'wdccxsesahackathon.com',
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
