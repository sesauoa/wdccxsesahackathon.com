"use client";

import Link from "next/link";
import CombinedLogos from "./CombinedLogos";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState("");
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const isScrollingRef = useRef(false);

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#faqs", label: "FAQs" },
    { href: "/#sponsors", label: "Sponsors" },
    // { href: "/resources", label: "Resources" },
    { href: "/past-winners", label: "Past Winners" },
    { href: "/gallery", label: "Gallery" },
  ];

  function handleClick(link: string) {
    setIsSideNavOpen(false);
    setSelectedLink(link);

    if (link.includes("/#")) {
      isScrollingRef.current = true;

      const targetId = link.split("/#")[1];
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  }

  useEffect(() => {
    setSelectedLink(window.location.pathname + window.location.hash);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setSelectedLink(`/#${id}`);
              window.history.replaceState(null, "", `/#${id}`);
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    const sectionIds = links.map((link) => link.href.split("/#")[1]).filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar h-16 bg-sesa-navy">
        <div className="flex-1 ml-10">
          <CombinedLogos />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex text-base space-x-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${selectedLink === href ? "selected" : ""}`}
                  onClick={() => handleClick(href)}
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
        className={`fixed top-0 right-0 h-full w-64 bg-sesa-navy text-white transform ${isSideNavOpen ? "-translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="py-2 px-2">
          <div className="w-full  flex justify-end">
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
        <ul className="menu p-4 text-base space-y-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${selectedLink === href ? "selected" : ""}`}
                onClick={() => handleClick(href)}
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
