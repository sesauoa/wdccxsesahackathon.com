'use client';

import Link from 'next/link';
import CombinedLogos from './CombinedLogos';
import { useState } from 'react';

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState('/');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  function handleClick(
    link: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.currentTarget.blur();
    setSelectedLink(link);
    setIsSideNavOpen(false);
  }

  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#faqs', label: 'FAQs' },
    { href: '/#sponsors', label: 'Sponsors' },
    // { href: "/#resources", label: "Resources" },
    { href: '/past-winners', label: 'Past Winners' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar h-16 bg-sesa-navy">
        <div className="ml-10 flex-1">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden space-x-2 text-base lg:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${selectedLink === href ? 'selected' : ''}`}
                  onClick={(event) => handleClick(href, event)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-square btn-ghost lg:hidden"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed right-0 top-0 h-full w-64 transform bg-sesa-navy text-white ${
          isSideNavOpen ? '-translate-x-0' : 'translate-x-full'
        } z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="px-2 py-2">
          <div className="flex w-full justify-end">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsSideNavOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul className="menu space-y-1 p-4 text-base">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${selectedLink === href ? 'selected' : ''}`}
                onClick={(event) => handleClick(href, event)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isSideNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      )}
    </div>
  );
}
