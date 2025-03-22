import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Theme history',
  keywords: [
    'WDCC x SESA Hackathon theme',
    'WDCC x SESA Hackathon theme history',
    'SESA hackathon theme',
    'SESA hackathon theme history',
    'WDCC hackathon theme',
    'WDCC hackathon theme history',
  ],
};

export default function ThemeHistoryPage() {
  return <ClientPage />;
}
