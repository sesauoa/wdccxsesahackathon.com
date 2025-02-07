import React from 'react';
import { cn } from '@/lib/clsx';
interface ReactProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ReactProps> = ({ children, ...props }) => {
  return (
    <section
      className={cn('relative flex min-h-dvh flex-col', props.className)}
      {...props}
    >
      <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
        <main className="responsive-body z-0 grow">{children}</main>
      </div>
    </section>
  );
};
