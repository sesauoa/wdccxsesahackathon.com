import React from 'react';
import { cn } from '@/lib/clsx';
import Navbar from '@/components/layout/navigation/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import { CursorAnimation } from '@/utils/CursorAnimation';
import { Blobs } from '@/components/blobs/Blobs';
import LenisScroll from '@/lib/LenisScroll';
import ScrollToTop from '@/components/layout/navigation/ScrollToTop';

interface ReactProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const StandardLayout: React.FC<ReactProps> = ({
  children,
  ...props
}) => {
  return (
    <LenisScroll>
      <Blobs />
      <div className="relative z-10">
        <Navbar />
        <section
          className={cn('relative flex min-h-dvh flex-col', props.className)}
          {...props}
        >
          <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
            <main className="responsive-body z-0 grow">{children}</main>
          </div>
        </section>
        <ScrollToTop />
        <Footer />
      </div>
      <CursorAnimation />
    </LenisScroll>
  );
};
