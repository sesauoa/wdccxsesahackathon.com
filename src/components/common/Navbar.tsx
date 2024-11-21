'use client';
'use client';

import { usePathname } from 'next/navigation';
import StaticNavbar from './StaticNavbar';
import IntersectionNavbar from './IntersectionNavbar';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.startsWith('/#')) {
    return <IntersectionNavbar />;
  } else {
    return <StaticNavbar />;
  }
}
