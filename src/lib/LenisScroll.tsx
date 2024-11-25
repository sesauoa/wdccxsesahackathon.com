'use client';

import React, { createContext, ReactNode, useContext } from 'react';
import { LenisOptions } from 'lenis';
import { ReactLenis, useLenis } from 'lenis/react';

interface LenisUtils {
  handleScrollTo: (target: string | number | HTMLElement) => void;
}

export const LenisUtilsContext = createContext<LenisUtils | undefined>(
  undefined
);

export const useLenisUtils = () => {
  const context = useContext(LenisUtilsContext);
  if (!context) {
    throw new Error(
      'useLenisUtils must be used within a SmoothScroll provider'
    );
  }
  return context;
};

const settings: LenisOptions = {
  smoothWheel: true,
  lerp: 0.09,
};

interface SmoothScrollProps {
  children: ReactNode;
}

const LenisUtilsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const lenis = useLenis();

  const handleScrollTo = (target: string | number | HTMLElement) => {
    if (!lenis) {
      console.warn('Lenis instance is not available');
      return;
    }
    lenis.scrollTo(target, {
      immediate: false,
      duration: 2,
    });
  };

  return (
    <LenisUtilsContext.Provider value={{ handleScrollTo }}>
      {children}
    </LenisUtilsContext.Provider>
  );
};

const LenisScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis options={settings} root>
      <LenisUtilsProvider>{children}</LenisUtilsProvider>
    </ReactLenis>
  );
};

export default LenisScroll;
