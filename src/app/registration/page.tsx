import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Registration',
  keywords: [
    'WDCC x SESA Hackathon registration',
    'SESA hackathon registration',
    'WDCC hackathon registration',
  ],
};

export default function RegistrationPage() {
  return <ClientPage />;
}
