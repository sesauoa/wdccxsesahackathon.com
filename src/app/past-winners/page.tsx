import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Past Winners',
  keywords: [
    'WDCC x SESA Hackathon winners',
    'WDCC x SESA Hackathon past winners',
    'SESA hackathon winners',
    'SESA hackathon past winners',
    'WDCC hackathon winners',
    'WDCC hackathon past winners',
  ],
};

export default function PastWinnersPage() {
  return <ClientPage />;
}
