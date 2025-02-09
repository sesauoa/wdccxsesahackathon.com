'use client';

import React from 'react';
import { useLenisUtils } from '@/lib/LenisScroll';

function ScrollToTop() {
  const { handleScrollTo } = useLenisUtils();

  function handleClick() {
    handleScrollTo(0);
  }
  return (
    <>
      <div className="fixed bottom-10 right-16 z-50 h-10 w-10">
        <button
          onClick={handleClick}
          className="h-full w-full rounded-full bg-white p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="sesa-navy"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ScrollToTop;
