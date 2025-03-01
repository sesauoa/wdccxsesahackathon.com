'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CombinedLogos from '../../../common/CombinedLogos';
import HamburgerMenu from './HamburgerMenu';
import links from '@/data/links';

export default function StaticNavbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full bg-sesa-navy">
      <div className="navbar h-16">
        <div className="ml-10 flex-1">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden space-x-2 text-base xl:flex">
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
