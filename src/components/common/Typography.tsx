import React from 'react';
import { cn } from '@/lib/clsx';

interface ReactProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// Header Components
export const H1: React.FC<ReactProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-4xl font-bold', className)} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<ReactProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn('text-3xl font-bold', className)} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<ReactProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-2xl font-bold', className)} {...props}>
      {children}
    </h3>
  );
};

export const StatHeading: React.FC<ReactProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 className={cn('text-7xl font-bold', className)} {...props}>
      {children}
    </h1>
  );
};

// Section Component
export const Section: React.FC<ReactProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn('h-screen w-full px-8 py-20 md:p-20', className)}
      {...props}
    >
      {children}
    </section>
  );
};
