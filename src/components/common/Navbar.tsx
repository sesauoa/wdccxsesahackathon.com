"use client";

import CombinedLogos from "./CombinedLogos";
import { useState } from "react";

export default function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="navbar h-16 bg-sesa-navy sticky top-0 z-50">
        <div className="flex-1">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex text-base">
            <li><a>About</a></li>
            <li><a>FAQs</a></li>
            <li><a>Sponsors</a></li>
            <li><a>Past Winners</a></li>
            <li><a>Gallery</a></li>
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
                d={isSideNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Side Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sesa-navy text-white transform ${
          isSideNavOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
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
        <ul className="menu p-4 text-base">
          <li><a>About</a></li>
          <li><a>FAQs</a></li>
          <li><a>Sponsors</a></li>
          <li><a>Past Winners</a></li>
          <li><a>Gallery</a></li>
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

