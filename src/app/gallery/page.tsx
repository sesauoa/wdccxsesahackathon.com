import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Gallery',
  keywords: [
    'WDCC x SESA Hackathon gallery',
    'SESA hackathon gallery',
    'WDCC hackathon gallery',
  ],
};

export default function PastWinnersPage() {
  return <ClientPage />;
}
