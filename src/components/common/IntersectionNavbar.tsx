'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CombinedLogos from './CombinedLogos';
import HamburgerMenu from './HamburgerMenu';

export default function IntersectionNavbar() {
  const [selectedLink, setSelectedLink] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#faqs', label: 'FAQs' },
    { href: '/#sponsors', label: 'Sponsors' },
    { href: '/past-winners', label: 'Past Winners' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/register', label: 'Registration' },
  ];

  useEffect(() => {
    const sectionIds = links
      .map((link) => link.href.split('/#')[1])
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setSelectedLink(`/#${id}`);
              window.history.replaceState(null, '', `/#${id}`);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [links]);

  const handleLinkClick = (href: string) => {
    if (href.includes('/#')) {
      const sectionId = href.split('/#')[1];
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-sesa-navy">
      <div className="navbar h-16">
        <div className="flex-1 ml-10">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden space-x-2 text-base lg:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${selectedLink === href ? 'selected' : ''}`}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <HamburgerMenu
            links={links}
            selectedLink={selectedLink}
            handleLinkClick={handleLinkClick}
          />
        </div>
      </div>
    </div>
  );
}
