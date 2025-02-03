import React from 'react';
import { cn } from '@/lib/clsx';
interface ReactProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ReactProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn('h-full w-full p-20 xl:px-80 xl:py-20', className)}
      {...props}
    >
      {children}
    </section>
  );
};
