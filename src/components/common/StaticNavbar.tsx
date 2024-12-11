'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CombinedLogos from './CombinedLogos';
import HamburgerMenu from './HamburgerMenu';

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
    <div className="sticky top-0 z-50 w-full bg-sesa-navy">
      <div className="navbar h-16">
        <div className="ml-10 flex-1">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden space-x-2 text-base lg:flex">
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
          <HamburgerMenu
            links={links}
            selectedLink={pathname}
            handleLinkClick={(href) => window.location.assign(href)}
          />
        </div>
      </div>
    </div>
  );
}
