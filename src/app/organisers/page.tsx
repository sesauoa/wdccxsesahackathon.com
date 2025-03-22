import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Organisers',
  keywords: [
    'WDCC x SESA Hackathon organisers',
    'SESA hackathon organisers',
    'WDCC hackathon organisers',
  ],
};

export default function OrganisersPage() {
  return <ClientPage />;
}
