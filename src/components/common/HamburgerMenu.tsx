'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HamburgerMenuProps {
  links: { href: string; label: string }[];
  selectedLink: string;
  handleLinkClick: (href: string) => void;
}

export default function HamburgerMenu({
  links,
  selectedLink,
  handleLinkClick,
}: HamburgerMenuProps) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-square btn-ghost lg:hidden nav-link"
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
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sesa-navy text-white transform ${
          isSideNavOpen ? '-translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="py-2 px-2">
          <div className="w-full flex justify-end">
            <button
              className="btn btn-square btn-ghost nav-link"
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
        <ul className="menu p-4 text-base space-y-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${selectedLink === href ? 'selected' : ''}`}
                onClick={() => {
                  handleLinkClick(href);
                  setIsSideNavOpen(false);
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      )}
    </div>
  );
}
