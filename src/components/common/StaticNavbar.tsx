'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StaticNavbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#faqs', label: 'FAQs' },
    { href: '/#sponsors', label: 'Sponsors' },
    { href: '/past-winners', label: 'Past Winners' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <div className="sticky top-0 z-50 bg-sesa-navy">
      <div className="navbar h-16">
        <div className="flex-1 ml-10">
          <span className="text-xl text-white font-bold">Logo</span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex text-base space-x-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'selected' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
