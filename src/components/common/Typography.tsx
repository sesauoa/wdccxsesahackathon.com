import React from 'react';
import { cn } from '@/lib/clsx';

interface TypograpgyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypograpgyProps> = ({ children, className }) => {
  return <div className={cn('text-5xl font-bold', className)}>{children}</div>;
};

export const H2: React.FC<TypograpgyProps> = ({ children, className }) => {
  return <div className={cn('text-4xl font-bold', className)}>{children}</div>;
};

export const H3: React.FC<TypograpgyProps> = ({ children, className }) => {
  return <div className={cn('text-3xl font-bold', className)}>{children}</div>;
};

export const P: React.FC<TypograpgyProps> = ({ children, className }) => {
  return <div className={cn('text-2xl', className)}>{children}</div>;
};
