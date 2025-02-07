import React from 'react';
import { cn } from '@/lib/clsx';

interface FilterButtonProps {
  onClick: () => void;
  isSelected?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  isSelected = false,
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        'min-w-fit whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out',
        isSelected
          ? 'bg-white text-sesa-navy'
          : 'bg-sesa-navy text-white hover:bg-slate-700',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
